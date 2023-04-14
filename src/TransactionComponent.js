export default function Transaction({ tx }) {
    if (!tx) {
        return null;
    }

    return (
        <>
            <h3>Transaction details</h3>
            <table>
                <tbody>
                    <tr><td>Hash:</td><td>{tx.hash}</td></tr>
                    <tr><td>From:</td><td>{tx.from}</td></tr>
                    <tr><td>To:</td><td>{tx.to}</td></tr>
                    <tr><td>Amount:</td><td>{tx.hash}</td></tr>
                </tbody>
            </table>
        </>
    )
}