import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';
import { action } from '@storybook/addon-actions';
import {Images} from '../../../configs/images';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  variant: 'only-icon',
  fontSize: 14,
  color: '#fff',
  width: '48px',
  height: '48px',
  padding: '16px 9px',
  margin: '0',
  backgroundColor: '#253A5A',
  border: 'none',
  borderRadius: 'none',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
};

export const ButtonIconText = Template.bind({});
ButtonIconText.args = {
  variant: 'button-style',
  fontSize: 14,
  color: '#fff',
  width: '216px',
  height: '48px',
  padding: '16px 9px',
  margin:'0 0',
  backgroundColor: '#253A5A',
  border: 'none',
  borderRadius: 'none',
  linkIcon: Images.DashboardIcon,
  title: "Dashboard",
  onClick: action('on-click'),
};
export const ButtonToogleEye = Template.bind({});
ButtonToogleEye.args = {
  variant: 'toogle-eye-icon',
  width: '48px',
  height: '48px',
  padding: '16px 9px',
  margin: '0',
  backgroundColor: '#fff',
  border: '1px solid #e9ecef',
  borderRadius: '4px',
  linkIcon: Images.OpenEye,
  title: "",
  onClick: action('on-click'),
};

