import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Link} from '.';
// import {Colors} from '../../../configs/colors';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    color: {control: 'color'},
  }
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'darlene.robertson@gmail.com',
  url: 'http://www.google.com'
};

export const Custom = Template.bind({});
Custom.args = {
  text: '+61 412 345 678',
  url: 'http://www.google.com',
  color: 'blue',
};
