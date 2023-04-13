import alchemy from './AlchemySDK'
import { useEffect, useState } from 'react';

export default function Block() {
    const [block, setBlock] = useState({ transactions: [] })

    useEffect(() => {
        async function getBlock() {
            setBlock(await alchemy.core.getBlock('latest'))
        }

        getBlock();
    }, []);

    return (
        <>
            <h2>Block component</h2>
            <div>
                <p>Block number: {block.number}</p>
                <p>Block hash: {block.hash}</p>
                <p>Block transactions count: {block.transactions.length}</p>
                <p>Block time: {block.timestamp}</p>
            </div>
        </>
    )
}
