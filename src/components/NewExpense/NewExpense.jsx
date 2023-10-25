import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import ExpenseFilter from './ExpenseFilter'
function NewExpense(props) {
  const expenseDataHandler = (expenses) => {
   const expenseData = {
    ...expenses,
    id: Math.random().toString()
   }
   props.onAddExpense(expenseData)
  }
  return (
   <div>
     <div className='new-expense'>
        <ExpenseForm savedExpenseData={expenseDataHandler}/>
    </div>
    <div>
      <ExpenseFilter/>
    </div>
   </div>
  )
}

export default NewExpense