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

  document.title = "Ultralight block explorer"

  return (
    <Grid columns={2} padded style={{ height: '100vh' }}>
      <Grid.Row style={{ height: '50%' }}>
        <Grid.Column width={50}>
          <Block
            blockTag={blockTag}
            setBlockTag={setBlockTag}
            block={block}
            setBlock={setBlock}
            setTransactions={setTransactions} />
        </Grid.Column>
        <Grid.Column width={50}>
          <TransactionList transactions={transactions} setTx={setTx} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ height: '50%' }}>
        <Grid.Column width={50}>
          <Transaction tx={tx} />
        </Grid.Column>
        <Grid.Column width={50}>
          <Account />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
