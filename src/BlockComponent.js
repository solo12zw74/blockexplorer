import alchemy from './AlchemySDK'
import { useEffect } from 'react';

export default function Block({ blockTag, setBlockTag, block, setBlock }) {

    useEffect(() => {
        async function getBlock() {
            setBlock(await alchemy.core.getBlock(blockTag))
        }

        getBlock();
    }, [blockTag, setBlock]);

    return (
        <>
            <h2>Block component</h2>
            <div>
                <p>Block number: {block.number}</p>
                <p>Block parent: <button onClick={() => setBlockTag(block.parentHash)}>{block.parentHash}</button></p>
                <p>Block hash: {block.hash}</p>
                <p>Block transactions count: {block.transactions.length}</p>
                <p>Block time: {block.timestamp}</p>
            </div>
        </>
    )
}
