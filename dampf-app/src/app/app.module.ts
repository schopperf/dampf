import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AccountSearchModule} from "./account-search/account-search.module";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {InfoComponent} from "./info/info.component";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AccountSearchModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
