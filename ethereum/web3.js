import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //In browser and metamask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We r on server or the user is not runing metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/5e078cd5c68d438d946e587841d7866e'
  );
  web3 = new Web3(provider);
}

export default web3;
