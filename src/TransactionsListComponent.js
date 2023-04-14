import Transaction from './TransactionComponent'
export default function TransactionList({ transactions }) {
    const txs = transactions.map(tx => <Transaction tx={tx} />)
    return (
        <>
            <h2> Block transactions: </h2>
            {txs}
        </>
    )
}