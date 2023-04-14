import Block from './BlockComponent'
import './App.css';
import Transaction from './TransactionComponent';
import TransactionList from './TransactionsListComponent';
import Account from './Account';
import { useState } from 'react';

function App() {
  const [blockTag, setBlockTag] = useState('latest')
  const [block, setBlock] = useState(null)
  const [transactions, setTransactions] = useState([])

  return (
    <div>
      <h1>Ultralight block explorer</h1>
      <Block 
        blockTag={blockTag}
        setBlockTag={setBlockTag}
        block={block}
        setBlock={setBlock}
        setTransactions={setTransactions} />
      <Transaction />
      <TransactionList />
      <Account />
    </div>
  );
}

export default App;
