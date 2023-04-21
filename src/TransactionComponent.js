import { Label, Table, Segment, Icon } from "semantic-ui-react";
import { Utils } from "alchemy-sdk";
import { useEffect } from "react";

export default function Transaction({ tx, setAcc }) {
   
    useEffect(() => {
        setAcc(null)
    }, [tx, setAcc])

    if (!tx) {
        return <Segment>
            <Label>
                Transaction
            </Label>
            <Label>not selected</Label>
        </Segment>
    }


    return (
        <Segment>
            <Label>
                Transaction
                <Label.Detail>{tx.hash}</Label.Detail>
            </Label>
            <Table celled>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>From</Table.Cell>
                        <Table.Cell>{tx.from} <Icon link name='id card' onClick={() => setAcc(tx.from)} /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>To</Table.Cell>
                        <Table.Cell>{tx.to} <Icon link name='id card' onClick={() => setAcc(tx.to)} /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Amount</Table.Cell>
                        <Table.Cell>{Utils.formatEther(tx.value)} ETH</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Segment>
    )
}