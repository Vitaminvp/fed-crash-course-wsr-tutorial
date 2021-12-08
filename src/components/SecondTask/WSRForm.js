import React, { useReducer } from 'react';
import {
  Layout,
  Breadcrumbs,
  Card,
  Cell,
  FormField,
  Input,
  Page,
  Heading,
  AddItem,
  IconButton,
  Box,
  Dropdown,
} from 'wix-style-react';
import { DeleteSmall } from 'wix-ui-icons-common';
import ActionBar from './ActionBar';
import DataHooks from './DataHooks';
import {
  getInitFormState,
  colors,
  breadcrumbItems,
  getItemById,
} from '../utils';
import SavedData from './SavedData';
import RoleDetails from './RoleDetails';

const WsrForm = () => {
  const [
    { firstName, lastName, selectedColorId, submittedValues },
    setState,
  ] = useReducer((state, newState) => ({ ...state, ...newState }), {
    ...getInitFormState(),
    submittedValues: null,
  });

  const clearForm = () => {
    setState({ ...getInitFormState() });
  };

  const isFormValid = () => {
    return !!firstName && !!lastName;
  };

  const isFormEmpty = () =>
    firstName === '' && lastName === '' && selectedColorId === '';

  const submitForm = () => {
    if (isFormValid()) {
      const colorItem = getItemById(selectedColorId, colors);
      setState({
        submittedValues: {
          firstName,
          lastName,
          color: colorItem && colorItem.value,
        },
      });
    }
  };

  return (
    <Page height="100vh">
      <Page.Header
        title="WSR Form"
        breadcrumbs={<Breadcrumbs items={breadcrumbItems} activeId={2} />}
        actionsBar={
          <ActionBar
            onClearClicked={clearForm}
            onSubmitClicked={submitForm}
            formValid={isFormValid()}
            formEmpty={isFormEmpty()}
          />
        }
      />
      <Page.Content>
        <Layout>
          <Cell span={8}>
            <Card>
              <Card.Header title="General Info" />
              <Card.Divider />
              <Card.Content>
                <Layout>
                  <Cell>
                    <Layout>
                      <Cell span={6}>
                        <FormField label="First name" required>
                          <Input
                            dataHook={DataHooks.FIRST_NAME}
                            value={firstName}
                            onChange={(e) =>
                              setState({ firstName: e.target.value })
                            }
                          />
                        </FormField>
                      </Cell>
                      <Cell span={6}>
                        <FormField label="Last name" required>
                          <Input
                            dataHook={DataHooks.LAST_NAME}
                            value={lastName}
                            onChange={(e) =>
                              setState({ lastName: e.target.value })
                            }
                          />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Cell>
                  <Cell>
                    <Layout gap="12px">
                      <Cell>
                        <Heading appearance="H5">Additional Info</Heading>
                      </Cell>
                      <Cell>
                        <FormField label="Favorite color">
                          <Box verticalAlign="middle" gap="12px">
                            <Box direction="vertical" width="100%">
                              <Dropdown
                                dataHook={DataHooks.FAVORITE_COLOR}
                                placeholder="Choose a color"
                                options={colors}
                                selectedId={selectedColorId}
                                onSelect={({ id }) =>
                                  setState({
                                    selectedColorId: id,
                                  })
                                }
                              />
                            </Box>
                            <IconButton
                              size="small"
                              disabled
                              priority="secondary"
                            >
                              <DeleteSmall />
                            </IconButton>
                          </Box>
                        </FormField>
                      </Cell>
                    </Layout>
                  </Cell>
                  <Cell>
                    <AddItem disabled>Add New List Item</AddItem>
                  </Cell>
                </Layout>
              </Card.Content>
            </Card>
          </Cell>
          <Cell span={4}>
            <Layout>
              <RoleDetails />
              {submittedValues && <SavedData {...submittedValues} />}
            </Layout>
          </Cell>
        </Layout>
      </Page.Content>
    </Page>
  );
};

export default WsrForm;
