import React from 'react';
import {ButtonProps} from './Button.props';
import './Button.styles.css';
import {Image} from '../Image'
import {Text} from '../Text'

export const Button: React.FC<ButtonProps> = ({
    variant='button-style',
    width= '280px',
    height= '48px',
    padding= '0',
    margin= '0',
    backgroundColor= "#ffffff",
    border = "none",
    borderRadius= "none",
    title,
    linkIcon,
    onClick,
    ...rest
}) => {
    return (
        <button onClick={onClick} className={`button ${variant}`} style={{width, height, backgroundColor, border, borderRadius }} {...rest} >
            {linkIcon && <Image width="25px" height="25px" margin= "0 0 0 5px" srcImg={linkIcon} />}
            {title && <Text children={title} fontSize={14} fontWeight={300} margin= "0 10px" color="#1a1a1a" />}
        </button>
    );
};
