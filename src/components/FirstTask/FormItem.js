import React from 'react';
import { Layout, Card, Cell, FormField, Input } from 'wix-style-react';
import Divider from '../Divider';

export const MAX_CHAR_NUM = 5;
export const ERR = 'error';
export const ERR_MSG = 'Too long string';
const INFO = 'Help me fill the field';
const LABEL = 'my unique field';

export default () => {
  const [{ firstInput, secondInput }, setValue] = React.useState({
    firstInput: '',
    secondInput: '',
  });

  const handleOnChange = (value) => {
    setValue((state) => ({ ...state, ...value }));
  };

  const firstError = firstInput.length > MAX_CHAR_NUM;
  const secondError = secondInput.length > MAX_CHAR_NUM;

  return (
    <Layout>
      <Cell>
        <Card>
          <Card.Header title="first card" />
          <Card.Divider />
          <Card.Content>
            <Layout>
              <Cell span={4}>
                <FormField
                  label={LABEL}
                  required
                  infoContent={INFO}
                  charCount={MAX_CHAR_NUM - firstInput.length}
                >
                  <Input
                    value={firstInput}
                    onChange={({ target: { value } }) =>
                      handleOnChange({ firstInput: value })
                    }
                    status={firstError ? ERR : null}
                    statusMessage={firstError ? ERR_MSG : null}
                    tooltipPlacement="top-end"
                  />
                </FormField>
                <Divider />
                <FormField
                  label={LABEL}
                  required
                  infoContent={INFO}
                  charCount={MAX_CHAR_NUM - secondInput.length}
                >
                  <Input
                    value={secondInput}
                    onChange={({ target: { value } }) =>
                      handleOnChange({ secondInput: value })
                    }
                    status={secondError ? ERR : null}
                    statusMessage={secondError ? ERR_MSG : null}
                    tooltipPlacement="top-end"
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
