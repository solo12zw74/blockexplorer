import alchemy from './AlchemySDK'
import { useEffect } from 'react';

export default function Block({ blockTag, setBlockTag, block, setBlock, setTransactions }) {
    const blockTime = new Date(block?.timestamp).toString()

    useEffect(() => {
        async function getBlock() {
            const block = await alchemy.core.getBlock(blockTag)
            setBlock(block)
            setTransactions(block.transactions)
        }

        getBlock();
    }, [blockTag, setBlock, setTransactions])

    async function tryGoToNextBlock(nextBlockNumber) {
        const currentLatestBlockNumber = await alchemy.core.getBlockNumber()
        if (nextBlockNumber <= currentLatestBlockNumber) {
            setBlockTag(nextBlockNumber)
        } else {
            alert("No more block yet")
        }
    }

    return (
        <>
            <h2>
                <button onClick={() => setBlockTag(block.number - 1)}>&lt;-</button>
                Block #{block?.number}
                <button onClick={() => tryGoToNextBlock(block.number + 1)}>-&gt;</button>
            </h2>
            <table>
                <tr><td>Block parent:</td><td><button onClick={() => setBlockTag(block?.parentHash)}>{block?.parentHash}</button></td></tr>
                <tr><td>Block hash:</td><td>{block?.hash}</td></tr>
                <tr><td>Block time:</td><td>{blockTime}</td></tr>
            </table>
        </>
    )
}
