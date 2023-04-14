import alchemy from './AlchemySDK'
import { useEffect } from 'react';

export default function Block({ blockTag, setBlockTag, block, setBlock, setTransactions }) {

    useEffect(() => {
        async function getBlock() {
            const block = await alchemy.core.getBlock(blockTag)
            setBlock(block)
            setTransactions(block.transactions)
        }

        getBlock();
    }, [blockTag, setBlock, setTransactions]);

    return (
        <>
            <h2>Block component</h2>
            <table>
                <tr><td>Block number: </td><td>{block?.number}</td></tr>
                <tr><td>Block parent:</td><td><button onClick={() => setBlockTag(block?.parentHash)}>{block?.parentHash}</button></td></tr>
                <tr><td>Block hash:</td><td>{block?.hash}</td></tr>
                <tr><td>Block tx count:</td> <td>{block?.transactions.length}</td></tr>
                <tr><td>Block time:</td><td> {block?.timestamp}</td></tr>
            </table>

        </>
    )
}
