import {ReactNode} from 'react';

export interface TextProps {
  children: ReactNode | string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  cssClass?: string;
  margin?: string;
}
