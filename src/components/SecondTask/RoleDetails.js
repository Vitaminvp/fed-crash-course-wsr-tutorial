import React from 'react';
import { Button, Card, Cell, Heading, Layout, Text } from 'wix-style-react';

const RoleDetails = () => (
  <Cell>
    <Card>
      <Card.Header
        title="Role details"
        suffix={
          <Button priority="secondary" disabled>
            Edit
          </Button>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Heading appearance="H6">Official title</Heading>
            <Text>Keyboard annihilator</Text>
          </Cell>
          <Cell>
            <Heading appearance="H6">Experience</Heading>
            <Text>It’s over nine thousand</Text>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  </Cell>
);

export default RoleDetails;
