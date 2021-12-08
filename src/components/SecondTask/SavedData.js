import React from 'react';
import { Card, Cell, Heading, Layout, Text } from 'wix-style-react';
import DataHooks from './DataHooks';

function SavedData({ firstName, lastName, color }) {
  return (
    <Cell>
      <Card>
        <Card.Header dataHook={DataHooks.SAVED_DATA} title="Saved data" />
        <Card.Divider />
        <Card.Content>
          <Layout>
            {[
              {
                title: 'First name',
                value: firstName,
              },
              {
                title: 'Last name',
                value: lastName,
              },
              {
                title: 'Favorite color',
                value: color,
              },
            ]
              .filter(({ value }) => !!value)
              .map(({ title, value }) => (
                <Cell key={title}>
                  <Heading appearance="H6">{title}</Heading>
                  <Text>{value}</Text>
                </Cell>
              ))}
          </Layout>
        </Card.Content>
      </Card>
    </Cell>
  );
}

export default SavedData;
