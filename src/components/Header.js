import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

import logo from '../assets/img/logo_awesome.svg';

class Header extends Component {
  constructor(props){
    super(props);
    
  }

  render() {

    return (
      <header className='header'>
       <img className='logo' src={logo} alt={'logo'}/>
       
       <nav className='nav'>
        <Nav />
       </nav>
      </header>
    );
  }
}

export default Header;
