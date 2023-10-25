import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("")
  
  // const enteredTitleChangeHandler = (e)=>{
  // setenteredTitle(e.target.value)
  // console.log(enteredTitle)
  // }
  // const AmountChangeHandler = (e)=>{
  //   setAmount(e.target.value)
  //   console.log(enteredTitle)
  //   }
  // const dateChangeHandler = (e)=>{
  //   setDate(e.target.value)
  // }
  const eventChangeHandler=(identifier, value)=>{
    if(identifier ==="enteredTitle"){
      setenteredTitle(value)
    }else if(identifier ==="date"){
      setDate(value)
    }else {
      setAmount(value)
    }

  }
  const submitHandler=(event)=>{
   event.preventDefault();
   const expenseData = {
    enteredTitle: enteredTitle,
    amount: amount,
    date: new Date(date)
   }
   props.savedExpenseData(expenseData)
   setenteredTitle('')
   setAmount('')
   setDate('')
  }
  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>enteredTitle</label>
      <input type='text' value = {enteredTitle} onChange={(event)=>eventChangeHandler("enteredTitle", event.target.value)}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
      <input type='number' value={amount} onChange={(event)=>{eventChangeHandler("amount", event.target.value)}}/>
      </div>
      <div className="new-expense__control">
      <label>Date</label>
      <input type="date" value={date} onChange={(event)=>eventChangeHandler("date", event.target.value)}/>
      </div>
      </div>
      <div className="new-expense__action">
        <button>Add Task</button>
      </div>
    </form>
    
  )
}

export default ExpenseForm