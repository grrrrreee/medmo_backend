const Web3 = require('web3')
const rpcURL = " https://mainnet.infura.io/v3/8b4a69362f4942faab90621907d0e469 "
const web3 = new Web3(rpcURL)

const account = "0x90e63c3d53E0Ea496845b7a03ec7548B70014A91"

const abi = []
const address = ""

const contract = new web3.eth.Contract(abi, address)

// contract.methods.totalSupply().call((err, result) => { console.log(result) })
// contract.methods.name().call((err, result) => { console.log(result) })
// contract.methods.symbol().call((err, result) => { console.log(result) })
// contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })

var Tx = require('ethereum-tx')

const Web3 = require('web3')
const web3 = new Web('https://ropsten.infura.io/YOUR_INFURA_API_KEY')

//web3.eth.accounts.create()

const account1 = ''
const account2 = ''

// export PRIVATE_KEY_1='your private key 1 here'
// export PRIVATE_KEY_1='your private key 2 here'

const privateKey1 = process.env.PRIVATE_KEY_1
const privateKey2 = process.env.PRIVATE_KEY_2

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1)
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_2)

/*
web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
})
*/

