import React from 'react';
import DataHooks from './DataHooks';
import { Box, Button } from 'wix-style-react';

const ActionBar = ({
  formValid,
  formEmpty,
  onClearClicked,
  onSubmitClicked,
}) => (
  <Box>
    <Box marginRight="12px">
      <Button
        dataHook={DataHooks.CLEAR_BUTTON}
        priority="secondary"
        onClick={onClearClicked}
        disabled={formEmpty}
      >
        Clear
      </Button>
    </Box>
    <Button
      disabled={!formValid}
      dataHook={DataHooks.SUBMIT_BUTTON}
      onClick={onSubmitClicked}
    >
      Submit
    </Button>
  </Box>
);

export default ActionBar;
