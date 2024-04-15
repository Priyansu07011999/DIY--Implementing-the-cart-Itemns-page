
import React from 'react';
import veg from '../../assets/meals.jpg';
import classes from './Header.module.css'; // Importing CSS module
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className='text-3xl'>ReactMeals</h1>
        <HeaderCardButton onClick = {props.onOpenCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={veg} alt='A table full of delicious food!' />
      </div>
    </>
  );
};


export default Header;
