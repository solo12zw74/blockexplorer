import Transaction from './TransactionComponent'
export default function TransactionList({ transactions }) {
    const txMoreCount = transactions.length - 10
    const txs = transactions.slice(0, 10).map(tx => <li><Transaction tx={tx} /> </li>)
    return (
        <>
            <h2> Block transactions ({transactions.length}): </h2>
            <ol>{txs}</ol>
            <span>and {txMoreCount} more</span>
        </>
    )
}