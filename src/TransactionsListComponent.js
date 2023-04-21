import { useEffect } from 'react';
import { Icon, Label, Segment } from 'semantic-ui-react';

export default function TransactionList({ transactions, setTx }) {
    const txs = transactions.map((tx, i) => <li key={i}> {tx.hash} <Icon link name="folder open" onClick={() => setTx(tx)} /> </li>)

    useEffect(() => {
        setTx(null)
    }, [transactions, setTx])

    return (
        <Segment>
            <Label>
                Transactions
                <Label.Detail>{transactions.length}</Label.Detail>
            </Label>
            <Segment style={{ maxHeight: 300, overflowY: 'scroll' }}>
                <ol>{txs}</ol>
            </Segment>
        </Segment>
    )
}