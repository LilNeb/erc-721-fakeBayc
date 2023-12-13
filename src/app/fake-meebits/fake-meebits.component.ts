import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import FakeMeebitsAbi from '../../assets/FakeMeebitsClaimer.json';

@Component({
  selector: 'app-fake-meebits',
  templateUrl: './fake-meebits.component.html',
  styleUrls: ['./fake-meebits.component.scss'],
})
export class FakeMeebitsComponent implements OnInit {
  private web3: Web3;
  private contract: any;
  private contractAddress = '0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55'; // Replace with your contract address

  constructor() {
    // Using Infura as the provider
    const infuraUrl = 'https://sepolia.infura.io/v3/d81e2d18d1ce486eb2df25e00a3069fc';
    this.web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
    this.contract = new this.web3.eth.Contract(FakeMeebitsAbi.abi, this.contractAddress);
  }

  ngOnInit(): void {}

  async mintToken() {
    try {
      const accounts = await this.web3.eth.getAccounts();
      const result = await this.contract.methods.mintAToken().send({ from: accounts[0] });
      console.log('Minted NFT:', result);
    } catch (error) {
      console.error('Error minting token:', error);
    }
  }
}
