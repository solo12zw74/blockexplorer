import { useEffect } from 'react';

export default function TransactionList({ transactions, setTx }) {
    const txMoreCount = transactions.length - 10
    const txs = transactions.slice(0, 10).map((tx, i) => <li key={i}> {tx.hash} <button onClick={() => setTx(tx)}>show</button> </li>)

    useEffect(() => {
        setTx(null)
    }, [transactions, setTx])

    return (
        <>
            <h2> Block transactions ({transactions.length}): </h2>
            <ol>{txs}</ol>
            <span>and {txMoreCount} more</span>
        </>
    )
}