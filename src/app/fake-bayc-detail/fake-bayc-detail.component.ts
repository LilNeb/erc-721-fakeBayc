import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Web3 from 'web3';
import contractAbi from '../../assets/FakeBAYC.json';

@Component({
  selector: 'app-fake-bayc-detail',
  templateUrl: './fake-bayc-detail.component.html',
  styleUrls: ['./fake-bayc-detail.component.scss'],
})
export class FakeBaycDetailComponent implements OnInit {
  web3: any;
  contract: any;
  tokenId: any;
  tokenMetadata: any;
  tokenExists: boolean = true; // Flag to check if token exists
  contractAddress = '0x1dA89342716B14602664626CD3482b47D5C2005E';

  constructor(private route: ActivatedRoute) {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.web3 = new Web3((window as any).ethereum);
      this.contract = new this.web3.eth.Contract(contractAbi.abi, this.contractAddress);
    } else {
      console.error('Metamask not found');
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tokenId = params['tokenId'];
      this.loadTokenData();
    });
  }

  async loadTokenData() {
    try {
      const uri = await this.contract.methods.tokenURI(this.tokenId).call();
      const response = await fetch(uri);
      if (response.ok) {
        this.tokenMetadata = await response.json();
      } else {
        this.tokenExists = false;
      }
    } catch (error) {
      console.error('Error loading token data', error);
      this.tokenExists = false;
    }
  }

  convertIpfsUrl(ipfsUrl: string): string {
    if (ipfsUrl && ipfsUrl.startsWith('ipfs://')) {
      return `https://ipfs.io/ipfs/${ipfsUrl.split('ipfs://')[1]}`;
    }
    return ipfsUrl;
  }
}
