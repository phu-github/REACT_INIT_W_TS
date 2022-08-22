  import React from 'react';
import {TextInputProps} from './TextInput.props';


export const TextInput: React.FC<TextInputProps> = ({
  width,
  height,
  typeInput,
  placeholderInput,
  borderColor = '#e1e1e1',
  nameInput,
  borderRadius,
  padding = '0 16px',
  margin = 0,
}) => {
  return (
    <input className='text-input-style' type={typeInput} placeholder={placeholderInput} name={nameInput} style={{ width, height, borderRadius, borderColor, padding, margin }}/>
  );
};
