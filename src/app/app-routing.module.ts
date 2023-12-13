import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainInfoComponent } from './chain-info/chain-info.component';
import { ErrorComponent } from './error/error.component';
import { FakeBaycComponent } from './fake-bayc/fake-bayc.component';

const routes: Routes = [
  { path: 'chain-info', component: ChainInfoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'fake-bayc', component: FakeBaycComponent },
  { path: '', redirectTo: '/chain-info', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
