import Transaction from './TransactionComponent'
export default function TransactionList({ transactions }) {
    const txs = transactions.map(tx => <li><Transaction tx={tx} /> </li>)
    return (
        <>
            <h2> Block transactions ({transactions.length}): </h2>
            <ol>{txs}</ol>
        </>
    )
}