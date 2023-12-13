import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

@Component({
  selector: 'app-chain-info',
  templateUrl: './chain-info.component.html',
  styleUrls: ['./chain-info.component.scss'],
})
export class ChainInfoComponent implements OnInit {
  web3: any;
  chainId: number | string = '';
  blockNumber: number | string = '';
  userAddress: string = '';

  constructor() {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.web3 = new Web3((window as any).ethereum);
    } else {
      console.error('Metamask not found');
    }
  }

  async ngOnInit() {
    try {
      if (this.web3) {
        await (window as any).ethereum.enable(); // Request access to Metamask
        const accounts = await this.web3.eth.getAccounts();
        this.userAddress = accounts[0];

        //this.chainId = 10;
        this.chainId = await this.web3.eth.getChainId();
        //console.log('chainId', this.chainId);
        this.blockNumber = await this.web3.eth.getBlockNumber();

        this.checkSepoliaNetwork();
      }
    } catch (error) {
      console.error('Error connecting to Metamask', error);
    }
  }

  checkSepoliaNetwork() {
    // Sepolia Testnet Chain ID is '11155111'
    if (this.chainId.toString() !== '11155111') {
      window.location.href = '/error'; // Redirect to error page
    }
  }
}
