import React from 'react';
import { Layout, Tabs } from 'wix-style-react';
import LayoutItem from './LayoutItem';
import FormItem from './FormItem';
import Divider from './Divider';
import Selection from './Selection';

export default () => {
  const [activeId, setActiveId] = React.useState(3);

  const tabContent = {
    1: <LayoutItem />,
    2: <FormItem />,
    3: <Selection />,
  };
  return (
    <>
      <Tabs
        activeId={activeId}
        onClick={(value) => setActiveId(value.id)}
        items={[
          { id: 1, title: 'Layout' },
          { id: 2, title: 'Form' },
          { id: 3, title: 'Selection' },
        ]}
      />
      <Divider />
      <Layout>{tabContent[activeId]}</Layout>
    </>
  );
};
