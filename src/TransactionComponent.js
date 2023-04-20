import { Label, Table, Segment } from "semantic-ui-react";
import { Utils } from "alchemy-sdk";

export default function Transaction({ tx }) {
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
            </Label>
            <Table celled>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Hash</Table.Cell><Table.Cell>{tx.hash}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>From</Table.Cell><Table.Cell>{tx.from}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>To</Table.Cell><Table.Cell>{tx.to}</Table.Cell>
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