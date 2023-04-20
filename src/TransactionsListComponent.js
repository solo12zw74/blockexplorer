import { useEffect } from 'react';
import { Label, Segment } from 'semantic-ui-react';

export default function TransactionList({ transactions, setTx }) {
    const txs = transactions.map((tx, i) => <li key={i}> {tx.hash} <button onClick={() => setTx(tx)}>show</button> </li>)

    useEffect(() => {
        setTx(null)
    }, [transactions, setTx])

    return (
        <Segment>
            <Label>
                Transactions
                <Label.Detail>{transactions.length}</Label.Detail>
            </Label>
            <div style={{maxHeight: 300,  overflowY: 'scroll' }}><ol>{txs}</ol></div>

        </Segment>
    )
}