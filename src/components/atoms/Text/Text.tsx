  import React from 'react';
import {TextProps} from './Text.props';
import './Text.styles.css';

export const Text: React.FC<TextProps> = ({
  children,
  fontSize = 14,
  color= '#000000',
  cssClass= '',
  margin= ''
}) => {
  return (
    <p className={`text-style ${cssClass}`} style={{ fontSize, color, margin }}>
      {children}
    </p>
  );
};
