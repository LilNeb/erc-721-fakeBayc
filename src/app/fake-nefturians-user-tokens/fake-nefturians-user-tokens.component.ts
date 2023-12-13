import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Web3 from 'web3';
import FakeNefturiansAbi from '../../assets/FakeNefturians.json';

@Component({
  selector: 'app-fake-nefturians-user-tokens',
  templateUrl: './fake-nefturians-user-tokens.component.html',
  styleUrls: ['./fake-nefturians-user-tokens.component.scss'],
})
export class FakeNefturiansUserTokensComponent implements OnInit {
  web3: any;
  contract: any;
  userAddress: string = '';
  tokens: any[] = [];
  contractAddress = '0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED';

  constructor(private route: ActivatedRoute) {
    this.web3 = new Web3((window as any).ethereum);
    this.contract = new this.web3.eth.Contract(FakeNefturiansAbi.abi, this.contractAddress);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userAddress = params['userAddress'];
      this.loadUserTokens();
    });
  }

  async loadUserTokens() {
    try {
      const tokenCount = await this.contract.methods.balanceOf(this.userAddress).call();

      for (let i = 0; i < tokenCount; i++) {
        const tokenId = await this.contract.methods.tokenOfOwnerByIndex(this.userAddress, i).call();

        const metadataUrl = `https://api.nefturians.io/metadata/${tokenId}`;
        const response = await fetch(metadataUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch metadata for token ID: ${tokenId}`);
        }

        const metadata = await response.json();
        this.tokens.push({
          id: tokenId,
          name: metadata.name,
          image: metadata.image,
          description: metadata.description,
          attributes: metadata.attributes, // Storing all the attributes
        });
      }
    } catch (error) {
      console.error('Error loading tokens:', error);
    }
  }
}
