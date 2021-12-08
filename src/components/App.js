import React, { useState } from 'react';
import { Tabs, WixStyleReactProvider, Heading } from 'wix-style-react';
import LayoutItem from './FirstTask/LayoutItem';
import FormItem from './FirstTask/FormItem';
import Divider from './Divider';
import Selection from './FirstTask/Selection';
import WsrForm from './SecondTask/WSRForm';
import { tabs } from './utils';
import DataHooks from './SecondTask/DataHooks';

export default () => {
  const [activeId, setActiveId] = useState(3);

  const tabContent = {
    1: <LayoutItem />,
    2: <FormItem />,
    3: <Selection />,
    4: <WsrForm />,
  };
  return (
    <WixStyleReactProvider>
      <Heading appearance="H1" dataHook={DataHooks.APP_TITLE}>
        FED Guild Crash Course 2021
      </Heading>
      <Tabs
        activeId={activeId}
        onClick={({ id }) => setActiveId(id)}
        items={tabs}
        dataHook={DataHooks.TABS}
      />
      <Divider />
      {tabContent[activeId]}
    </WixStyleReactProvider>
  );
};
