require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski strike rival rural smile good arctic metal genre'; 
let testAccounts = [
"0x024c43d57a7621aba6d872ff657afee723ee91ded5237a3a597a40460b830c22",
"0x6c826e034c7a9761d5ae6a13897f1a6382456b9328f3607a8208d1ebf0bb5f45",
"0x93f76dda454f02080cf13bb2b284dd3776eb956ba6e7e6bc2dcdcd792ca0ac13",
"0xdf3001a0c39d7419db414bf86d1a68ef9ebd06d9e006d5f9d390308347b5933e",
"0x655f8562fb56441269b67fc9a181e1e0d280dbac9cc368024c6e575509cf64e7",
"0x984da06facc3d8c0462966d2fe94c27ace850b7e0e949dad9c0f2c66bc794b9e",
"0x4b50fc5badbb4f4c139f826094d420b57a26eb67bb864691679012ee01fe4aaa",
"0xce128018fc47aac159a43a64d8229eb8f292a0fe4b4b3844a38acbdf78d81727",
"0xf2f3b62ebb69ca429b9fd36e6b9cb46484955ecf396c2f09d66392c324ff028a",
"0x05c9d91b2f585aaa6ac11463eeba6c33d8aa87556c9330dcac5319f8f0d2368b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


