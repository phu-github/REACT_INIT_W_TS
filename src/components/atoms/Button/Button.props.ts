import {ReactNode} from 'react';

export interface ButtonProps {
  variant?: string;
  width?: string | number;
  height?: string | number;
  padding?: string;
  margin?: string | number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  linkIcon?:string;
  title?: string;
  isActive?: string
  onClick?: () => void;
}
