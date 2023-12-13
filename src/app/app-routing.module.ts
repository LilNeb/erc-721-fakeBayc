import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainInfoComponent } from './chain-info/chain-info.component';
import { ErrorComponent } from './error/error.component';
import { FakeBaycComponent } from './fake-bayc/fake-bayc.component';
import { FakeBaycDetailComponent } from './fake-bayc-detail/fake-bayc-detail.component';
import { FakeNefturiansComponent } from './fake-nefturians/fake-nefturians.component';
import { FakeNefturiansUserTokensComponent } from './fake-nefturians-user-tokens/fake-nefturians-user-tokens.component';
import { FakeMeebitsComponent } from './fake-meebits/fake-meebits.component';

const routes: Routes = [
  { path: 'chain-info', component: ChainInfoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'fake-bayc', component: FakeBaycComponent },
  { path: '', redirectTo: '/chain-info', pathMatch: 'full' },
  { path: 'fake-bayc/:tokenId', component: FakeBaycDetailComponent },
  { path: 'fakeNefturians', component: FakeNefturiansComponent },
  { path: 'fakeNefturians/:userAddress', component: FakeNefturiansUserTokensComponent },
  { path: 'fakeMeebits', component: FakeMeebitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
