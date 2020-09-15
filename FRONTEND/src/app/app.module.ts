import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
