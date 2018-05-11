import React, { Component } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

import fb from '../assets/img/fb1.svg';
import tw from '../assets/img/tw.svg';
import g from '../assets/img/g+.svg';

class MobileNav extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      buttonText: PropTypes.string,
    })),
  }
  state = {
    selectedItem: undefined
  }
  onItemClick = (event) => {
    const { buttonText: selectedItem } = event.currentTarget;
    this.setState({
      selectedItem,
    });
  };
  
  render() {
    const items = [
      {buttonText: 'features' },
      {buttonText: 'case studies' },
      {buttonText: 'about' },
      ]
    const { selectedItem } = this.state;
    return (
      <div className='mobile-nav'>
        <ul className='mobile-nav__list'>
          {items && items.length > 0 ?
            items.map(item => 
              <li className='mobile-nav__item'>
              <Button
                key={item.buttonText}
                buttonText={item.buttonText}
                onClick={this.onItemClick}
                setState={{ active: selectedItem === item.buttonText ? 'true' : 'false' }}
              >
                {item.buttonText}
              </Button></li>
            ) : 'kwas'}
          
          <li className='mobile-nav__item'><Button buttonClass='button__type2' link="#contact" buttonText="contact"/></li>
        </ul>
        <div className="mobile-nav-social__wrapper">
            <img className='mobile-nav-social__icon' src={fb}/>
            <img className='mobile-nav-social__icon' src={tw}/>
            <img className='mobile-nav-social__icon-g' src={g}/>
        </div>
      </div>
    );
  }
}

export default MobileNav;