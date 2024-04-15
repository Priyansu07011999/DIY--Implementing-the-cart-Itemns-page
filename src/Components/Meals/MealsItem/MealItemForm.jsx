import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm() {
  return (
    <form className={classes.form}>
      {/* <label htmlFor="amount">Amount</label> */}
      <Input 
      label = 'Amount'
      input = {{
        id: 'amount_'  ,
        type:'number',
        min: '1',
        step:'1',
        defaultValue:'1'
      }}
      />
      <button>+ Add</button>
    </form>
  )
}