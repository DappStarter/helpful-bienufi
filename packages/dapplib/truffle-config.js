require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'half clock bright smooth fine birth meadow coach hover private olympic genuine'; 
let testAccounts = [
"0xb48d84f7c7e5a8309996f80d1eb72d1acfd27e172dc6945b4fddba44a770d040",
"0x54e3a34e4f1c885ab26e3d00db7343e5530dba576051f6a313b83b4a960de500",
"0x9cbec52dbbe09ef1e31657de2ea1bbd58749235a8e01809f92f34adce6a661ee",
"0x4f9c75594083a74b86d2fd72c5326f9e94b5fd85cf6e55530d030a469a9ebc7a",
"0xafbdbd3bad4ac2986c7e1a4fd0365deae5514cd915eb2a0ca47aea4c1b5256c6",
"0xdfe3f9a4128932eb75e857ea2223565b4a48bb5c45fbaad961c62f9fb01fa747",
"0xf6b4cc5ab1c043310c8b1c91c3fea26b6d781b87345e2e8f242c15c14c4129f7",
"0x13fb03a0a497090525c498717a65bd731fd2bb93405ed27cb630d05200e4e559",
"0x426b40692143412e3397306bb6a3593023403fbed9a1acb0cafbec6c55473171",
"0x9aa21137bf651a5caeb5378268cc1e314901d16da178e3df90db25247653da9e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

