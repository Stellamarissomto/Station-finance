import React from 'react';
import { images } from '../../images';
import {NavStyle, Menu, Logo, ConnectBtn } from './style'

const  Nav: React.FC = () => {
    return (
        <NavStyle>
            <Logo>
                <img src={images.logo} alt='station finanace logo' />
            </Logo>
            <ConnectBtn>
                <button>connect wallet</button>
            </ConnectBtn>
            <Menu>
                <img src={images.menu} alt="menu icon" />
            </Menu>
            
        </NavStyle>
    )
}

export default Nav 
