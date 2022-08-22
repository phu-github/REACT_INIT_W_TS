import {ReactNode} from 'react';
export interface LinkProps {
  text?: string;
  url?: string;
  color?: string;
  fontSize? :string;
  children?: ReactNode | string;
}
