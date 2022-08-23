  import React from 'react';
import {TextProps} from './Text.props';
import './Text.styles.css';

export const Text: React.FC<TextProps> = ({
  children,
  fontSize = 14,
  fontWeight="300",
  color= '#1a1a1a',
  cssClass= '',
  margin= ''
}) => {
  return (
    <p className={`text-style ${cssClass}`} style={{ fontSize, fontWeight, color, margin }}>
      {children}
    </p>
  );
};
