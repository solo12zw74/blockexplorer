import alchemy from './AlchemySDK'
import { useEffect } from 'react';
import { Icon, Segment, Grid, Label, Container } from 'semantic-ui-react';

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
            <Container>
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
            </Container>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>Hash:</Grid.Column>
                        <Grid.Column>{block?.hash}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>Time:</Grid.Column>
                        <Grid.Column width={8}>{blockTime} </Grid.Column>
                    </Grid.Row>
                </Grid >
            </Container>
        </Segment>
    )
}
