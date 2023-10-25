import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Computer',
      amount: 9480.12,
      date: new Date(2023, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 7999.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2949.67,
      date: new Date(2023, 9, 8),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 9, 12),
    },
  ];
  const addExpense = (expense)=>{
   console.log('In App js');
   console.log(expense);
  }
  return (
    <div className="App">
      
      <NewExpense onAddExpense={addExpense}/>
      <Expenses expenses={expenses}/>
     </div>
  );
}

export default App;
