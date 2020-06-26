import React from 'react'

import './Footer.css';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';

import logo from '../images/logo2.png'


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="row">
                <div className="col">
                    <ul> <img src={logo} alt="logo"/> </ul>
                </div>
                <div/>
                <div className="col">
                    <ul className="icons">
                        <p>Follow us on our social media!</p>
                        <IconButton color="primary" aria-label="Facebook" href="https://www.facebook.com/sistersunitednz/">
                            <Icon><Facebook /></Icon>
                        </IconButton>
                        <IconButton color="primary" aria-label="Instagram" href="https://www.instagram.com/sistersunitednz/?hl=en">
                            <Icon><Instagram /></Icon>
                        </IconButton>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Footer;

