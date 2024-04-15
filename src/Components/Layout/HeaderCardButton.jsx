import React,{useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import CardContext from '../../store/cardContext'
import classes from './HeaderCardButton.module.css'

function HeaderCardButton(props) {
  const cardCtx = useContext(CardContext)
  const numberOfCardItems = cardCtx.items.reduce((curr, item) => {
    return curr + item.amount
  }, 0)
  return (
    <button className= {classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className= {classes.badge}>0</span>
    </button>
  )
}

export default HeaderCardButton