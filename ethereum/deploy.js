const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { request } = require('express');
// 0xb517E10e39d91d92Df0606306502933fA1589700
const compiledFactory = require('./build/CampaignFactory.json');
// const compiledCampaign = require('./build/Campaign.json');

const provider = new HDWalletProvider(
  'minute minimum produce castle couple coyote repeat pitch response leave source honey',
  'https://rinkeby.infura.io/v3/a0301393915f4a12a3213cbf5eb5857a'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

  //   console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();
