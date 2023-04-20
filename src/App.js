import Block from './BlockComponent'
import './App.css';
import TransactionList from './TransactionsListComponent';
import Account from './Account';
import { useState } from 'react';
import Transaction from './TransactionComponent';
import { Grid } from 'semantic-ui-react';

function App() {
  const [blockTag, setBlockTag] = useState('latest')
  const [block, setBlock] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [tx, setTx] = useState(null)
  const [acc, setAcc] = useState(null)

  document.title = "Ultralight block explorer"

  return (
    <Grid columns={2} padded style={{ height: '100vh' }}>
      <Grid.Row style={{ height: '50%' }}>
        <Grid.Column width={8}>
          <Block
            blockTag={blockTag}
            setBlockTag={setBlockTag}
            block={block}
            setBlock={setBlock}
            setTransactions={setTransactions} />
        </Grid.Column>
        <Grid.Column width={8}>
          <TransactionList transactions={transactions} setTx={setTx} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ height: '50%' }}>
        <Grid.Column width={8}>
          <Transaction tx={tx} setAcc={setAcc} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Account acc={acc}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
