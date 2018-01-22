import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AccountSearchModule} from "./account-search/account-search.module";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {InfoComponent} from "./info/info.component";
import {AccountService} from "./services/account.service";
import {GameService} from "./services/game.service";
import {GameAccountService} from "./services/gameAccount.service";
import {GameSearchModule} from "./game-search/game-search.module";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "./shared/shared.module";
import {HttpModule} from "@angular/http";
import {AuthService} from "./shared/auth/auth.service";
import {AuthGuard} from "./shared/auth/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AccountSearchModule,
    GameSearchModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    AccountService,
    GameService,
    GameAccountService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
