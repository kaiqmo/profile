import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children,submit, isGoogleSignIn,radius15,w100, inverted, ...OtherProps}) =>(
    <button className={`${inverted ? 'inverted':''} ${submit? 'submit':''} ${w100? 'w100':''} ${radius15? 'radius15':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...OtherProps}>
        {children}
    </button>
)
export default CustomButton;