import alchemy from './AlchemySDK'
import { useEffect } from 'react';
import { Icon, Segment, Label, Table } from 'semantic-ui-react';

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
        <Segment>
            <Label as='a' onClick={() => setBlockTag(block.number - 1)}>
                <Icon name='arrow left' />
            </Label>
            <Label>
                Block
                <Label.Detail>#{block?.number}</Label.Detail>
            </Label>
            <Label as='a' onClick={() => tryGoToNextBlock(block.number + 1)}>
                <Icon name='arrow right' />
            </Label>

            <Table celled>
                <Table.Body>
                    <Table.Row><Table.Cell>Hash</Table.Cell><Table.Cell>{block?.hash}</Table.Cell></Table.Row>
                    <Table.Row><Table.Cell>Time</Table.Cell><Table.Cell>{blockTime}</Table.Cell></Table.Row>
                </Table.Body>
            </Table>
        </Segment >
    )
}
