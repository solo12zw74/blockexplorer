import alchemy from './AlchemySDK'
import { useEffect } from 'react';
import { Button, Icon, Header, Segment, Table, SegmentGroup } from 'semantic-ui-react';

export default function Block({ blockTag, setBlockTag, block, setBlock, setTransactions }) {
    const blockTime = new Date(block?.timestamp).toString()

    useEffect(() => {
        async function getBlock() {
            const block = await alchemy.core.getBlockWithTransactions(blockTag)
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
            <Header as='h1' block>
                Block #{block?.number}
                <Segment>
                    <Button animated onClick={() => setBlockTag(block.number - 1)}>
                        <Button.Content visible>Previous</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                    <Button animated onClick={() => tryGoToNextBlock(block.number + 1)}>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Segment>
            </Header>

            <SegmentGroup attached>
                <Segment>Parent: {block?.parentHash} </Segment>
                <Segment>Hash: {block?.hash}</Segment>
                <Segment>Time: {blockTime}</Segment>
            </SegmentGroup >
        </>
    )
}
