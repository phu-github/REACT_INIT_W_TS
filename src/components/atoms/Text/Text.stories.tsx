import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Text',
  fontSize: 14,
  color: 'black',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Text',
  fontSize: 12,
  color: 'gray',
  margin: "0"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary Text',
  fontSize: 10,
  color: 'black',
  margin: "0"
};
