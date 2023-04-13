import { Alchemy, Network } from 'alchemy-sdk';

// Refer to the README doc for more information about using API
// level code.
// keys in client-side code. You should never do this in production
const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default alchemy