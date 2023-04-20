import { useEffect } from 'react';
import { Label, Segment } from 'semantic-ui-react';

export default function TransactionList({ transactions, setTx }) {
    const txMoreCount = transactions.length - 10
    const txs = transactions.slice(0, 10).map((tx, i) => <li key={i}> {tx.hash} <button onClick={() => setTx(tx)}>show</button> </li>)

    useEffect(() => {
        setTx(null)
    }, [transactions, setTx])

    return (
        <Segment>
            <Label>
                Transactions
            </Label>
            <ol>{txs}</ol>
            <span>and {txMoreCount} more</span>
        </Segment>
    )
}