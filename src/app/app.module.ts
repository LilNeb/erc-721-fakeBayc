import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChainInfoComponent } from './chain-info/chain-info.component';
import { ErrorComponent } from './error/error.component';
import { FakeBaycComponent } from './fake-bayc/fake-bayc.component';
import { FakeBaycDetailComponent } from './fake-bayc-detail/fake-bayc-detail.component';
import { FakeNefturiansComponent } from './fake-nefturians/fake-nefturians.component';
import { FakeNefturiansUserTokensComponent } from './fake-nefturians-user-tokens/fake-nefturians-user-tokens.component';
import { FakeMeebitsComponent } from './fake-meebits/fake-meebits.component';

@NgModule({
  declarations: [AppComponent, ChainInfoComponent, ErrorComponent, FakeBaycComponent, FakeBaycDetailComponent, FakeNefturiansComponent, FakeNefturiansUserTokensComponent, FakeMeebitsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
