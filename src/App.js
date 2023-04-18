import Block from './BlockComponent'
import './App.css';
import TransactionList from './TransactionsListComponent';
import Account from './Account';
import { useState } from 'react';
import Transaction from './TransactionComponent';

function App() {
  const [blockTag, setBlockTag] = useState('latest')
  const [block, setBlock] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [tx, setTx] = useState(null)

  document.title = "Ultralight block explorer"

  return (
    <div>
      <Block
        blockTag={blockTag}
        setBlockTag={setBlockTag}
        block={block}
        setBlock={setBlock}
        setTransactions={setTransactions} />
      <TransactionList transactions={transactions} setTx={setTx} />
      <div><Transaction tx={tx} /></div>
    </div>
  );
}

export default App;
