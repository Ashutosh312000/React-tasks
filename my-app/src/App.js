import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      LocationOfExpenditure:'Delhi',
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      LocationOfExpenditure:'nagpur',
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      LocationOfExpenditure:'punjab',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      LocationOfExpenditure:'mumbai',
      date: new Date(2021, 5, 12),
    },
  ];
  const list=[]
  expenses.forEach((element) => {
    list.push(
      <ExpenseItem
      key={element.id}
    title={element.title}
    amount={element.amount}
    date={element.date}
    LocationOfExpenditure={element.LocationOfExpenditure}
  ></ExpenseItem>
    )
  })
  

  return (
    <div>
      <h2>Let's get started!</h2>
     {list}
    </div>
  );
}

export default App;
