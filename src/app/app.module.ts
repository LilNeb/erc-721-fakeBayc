import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChainInfoComponent } from './chain-info/chain-info.component';
import { ErrorComponent } from './error/error.component';
import { FakeBaycComponent } from './fake-bayc/fake-bayc.component';

@NgModule({
  declarations: [AppComponent, ChainInfoComponent, ErrorComponent, FakeBaycComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
