import { Label, Segment } from "semantic-ui-react";

export default function Account({ acc }) {

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
    </Segment>
}