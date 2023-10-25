import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate/ExpenseDate'
import Card from './UI/Card'

function ExpenseItem(props) {
    const expenseDate = new Date(2023, 9, 8 )
    const [title, setTitle] = useState(props.title)
    
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
     <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className="expense-item__price"> ₹{ props.amount }</div>
     </div>
    </Card>
  )
}

export default ExpenseItem
              