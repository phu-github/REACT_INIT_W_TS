import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '.';

export default {
  title: 'atoms/TextInput',
  component: TextInput,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 600,
  height: 50,
  typeInput: 'text',
  placeholderInput: 'hello',
  borderColor: '#e1e1e1',
  nameInput: 'first',
  borderRadius: '2px',
};

