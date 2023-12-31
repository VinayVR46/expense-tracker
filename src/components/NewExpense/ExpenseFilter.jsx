import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter() {
  return (
    <div className='expense-filter'>
        <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
       </select>
        </div>
    </div>
  )
}

export default ExpenseFilter