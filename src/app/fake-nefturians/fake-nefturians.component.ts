import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import FakeNefturiansAbi from '../../assets/FakeNefturians.json'; // Adjust the path as needed

@Component({
  selector: 'app-fake-nefturians',
  templateUrl: './fake-nefturians.component.html',
  styleUrl: './fake-nefturians.component.scss',
})
export class FakeNefturiansComponent implements OnInit {
  web3: any;
  contract: any;
  minTokenPrice: any;
  contractAddress = '0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED'; // Contract address

  constructor() {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.web3 = new Web3((window as any).ethereum);
      this.contract = new this.web3.eth.Contract(FakeNefturiansAbi.abi, this.contractAddress);
    } else {
      console.error('Metamask not found');
    }
  }

  ngOnInit() {
    this.loadMinTokenPrice();
  }

  async loadMinTokenPrice() {
    this.minTokenPrice = await this.contract.methods.tokenPrice().call();
  }

  async buyToken() {
    const accounts = await this.web3.eth.getAccounts();
    const extraWei = '10000000000000'; // Adding a bit extra Wei
    const purchasePrice = BigInt(this.minTokenPrice) + BigInt(extraWei);

    try {
      await this.contract.methods.buyAToken().send({
        from: accounts[0],
        value: purchasePrice.toString(),
      });
    } catch (error) {
      console.error('Error purchasing token:', error);
    }
  }
}
