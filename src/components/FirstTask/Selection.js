import React from 'react';
import {
  Layout,
  Cell,
  Card,
  FormField,
  Input,
  Dropdown,
} from 'wix-style-react';
import { ERR, ERR_MSG, MAX_CHAR_NUM } from './FormItem';

export default () => {
  const [{ inputValue, dropdownSelectedId }, setValue] = React.useState({
    inputValue: '',
    dropdownSelectedId: -1,
  });

  const handleChange = (value) => {
    setValue((state) => ({ ...state, ...value }));
  };

  const inputError = inputValue.length > MAX_CHAR_NUM;

  return (
    <Layout>
      <Cell>
        <Card>
          <Card.Header title="Inputs and Selection" />
          <Card.Content>
            <Layout>
              <Cell span={8}>
                <FormField
                  label="<Input/> - A simple Input"
                  infoContent="Use this for regular text input"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) =>
                      handleChange({ inputValue: e.target.value })
                    }
                    status={inputError ? ERR : null}
                    statusMessage={inputError ? ERR_MSG : null}
                    tooltipPlacement="top-end"
                  />
                </FormField>
              </Cell>
              <Cell span={8}>
                <FormField
                  label="<Dropdown/> - A simple select component"
                  infoContent="Use this to pick a value from a set"
                >
                  <Dropdown
                    selectedId={dropdownSelectedId}
                    onSelect={(option) =>
                      handleChange({ dropdownSelectedId: option.id })
                    }
                    options={[
                      {
                        id: 0,
                        value: 'first option',
                      },
                      {
                        id: 1,
                        value: 'second option',
                      },
                      {
                        id: 1,
                        value: 'third option',
                      },
                    ]}
                  />
                </FormField>
              </Cell>
            </Layout>
          </Card.Content>
        </Card>
      </Cell>
    </Layout>
  );
};
