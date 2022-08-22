import React from 'react';
// import {Colors} from '../../../configs/colors';
import {LinkProps} from './Link.props';
import './Link.styles.css';

export const Link: React.FC<LinkProps> = ({
  children,
  text,
  url,
  color = '',
  fontSize,
}) => {
  return (<a className="link-style" style={{color,fontSize}} href={url}>{text}{children}</a>);
};
