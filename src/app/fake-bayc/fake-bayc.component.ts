import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import ContractAbi from '../../assets/FakeBAYC.json';

@Component({
  selector: 'app-fake-bayc',
  templateUrl: './fake-bayc.component.html',
  styleUrls: ['./fake-bayc.component.scss'],
})
export class FakeBaycComponent implements OnInit {
  private web3: any;
  private contractAddress = '0x1dA89342716B14602664626CD3482b47D5C2005E'; // Contract Address
  private fakeBaycContract: any; // Contract Instance
  public tokenName: string = '';
  public totalTokens: number = 0;
  private fakeBaycAbi = ContractAbi.abi;

  constructor() {
    if ((window as any).ethereum) {
      this.web3 = new Web3((window as any).ethereum);
      console.log('Web3 initialized');
    } else {
      console.error('Ethereum provider (like Metamask) not found');
    }
  }

  async ngOnInit() {
    console.log('Initializing...');
    if (this.web3) {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' }); // Request access
      console.log('Web3 is available');
      this.fakeBaycContract = new this.web3.eth.Contract(this.fakeBaycAbi, this.contractAddress);
      this.loadContractData();
    } else {
      console.log('Web3 is not available');
    }
  }

  async loadContractData() {
    console.log('Loading contract data...');
    try {
      this.tokenName = await this.fakeBaycContract.methods.name().call();
      console.log('Token Name:', this.tokenName);
      this.totalTokens = await this.fakeBaycContract.methods.totalSupply().call();
      console.log('Total Tokens:', this.totalTokens);
    } catch (error) {
      console.error('Error fetching contract data', error);
    }
  }

  async claimToken() {
    console.log('Claiming token...');
    try {
      const accounts = await this.web3.eth.getAccounts();
      console.log('User Accounts:', accounts);
      await this.fakeBaycContract.methods.claimAToken().send({ from: accounts[0] });
      console.log('Token claimed');
    } catch (error) {
      console.error('Error claiming token', error);
    }
  }
}
