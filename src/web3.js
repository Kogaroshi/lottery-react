import Web3 from 'web3';

window.ethereum.enable();

const newProv = window.web3.currentProvider;

const web3 = new Web3(newProv);

export default web3;