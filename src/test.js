//
// const { ETHERSCAN_API_KEY, ETHERSCAN_API_URL, FAUCET_ADDRESS, GOERLI_API_URL } = process.env;
// console.log(ETHERSCAN_API_KEY, GOERLI_API_URL)
const axios = require('axios');

async function getGasPrice(){
        const url = `https://api-goerli.etherscan.io/api?module=gastracker&action=gasoracle&apikey=Y9Y41PJZ7KUJP3SVPZRZ29T99QEAJ434KZ`
        let lastGasPrice =  (await axios.get(url)).data.result.FastGasPrice
        if (isNaN(lastGasPrice)){
                return 1600000000000
        }
        let gas = Number(lastGasPrice + '0000000000');
        return gas + gas * 0.15
}
(getGasPrice().then(function (result){console.log(result)}))
