import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../proLogo.png';
import './nav.css'
import styledComponents from 'styled-components';
import { ButtonContainer } from './button';



export default class NavBar extends Component {
    render() {
        return (
            <NavWraper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
              <Link to='/' >
                <img src={logo} alt='store' className='navbar-brand' />
              </Link>
              <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                  <Link to='/' className='nav-link text-white'>Product</Link>
                  
                </li>
              </ul>
              <Link to='./incart' className='cart'>
                <ButtonContainer><i className='fas fa-cart-plus'>My cart</i></ButtonContainer>
              </Link>

            </NavWraper>
        )
    }
}

const NavWraper=styledComponents.nav`
background:var(--mainPink);
.nav-link{
color:var(--mainwhite);
text-transform:capitalize;
font-size:1.3rem;

}`
