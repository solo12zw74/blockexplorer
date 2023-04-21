import { useEffect } from "react";
import { useState } from "react";
import { Label, Segment, Table } from "semantic-ui-react";
import alchemy from "./AlchemySDK";
import { Utils } from "alchemy-sdk";


export default function Account({ acc }) {

    const [balance, setBalance] = useState(0)

    useEffect(() => {
        async function getBlock() {
            const b = await alchemy.core.getBalance(acc)
            setBalance(b)
        }

        getBlock();
    }, [acc, setBalance])

    if (!acc) {
        return <Segment>
            <Label>Account</Label>
            <Label>not selected</Label>
        </Segment>
    }

    return <Segment>
        <Label>
            Account
        </Label>
        <Label>{acc}</Label>
        <Table celled>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Amount</Table.Cell>
                    <Table.Cell>{Utils.formatEther(balance)} ETH</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Segment>
}