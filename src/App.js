import Block from './BlockComponent'
import './App.css';
import Transaction from './TransactionComponent';
import TransactionList from './TransactionsListComponent';
import Account from './Account';

function App() {

  return (
    <div>
      <h1>Ultralight block explorer</h1>
      <Block />
      <Transaction />
      <TransactionList />
      <Account />
    </div>
  );
}

export default App;
