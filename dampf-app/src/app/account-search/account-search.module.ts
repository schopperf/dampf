import {AccountSearchComponent} from "./account-search.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccountComponent} from "./account/account.component";
import {APP_ROUTES} from "../app.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AccountSearchComponent,
    AccountComponent

  ],
  exports: [
    AccountSearchComponent
  ],
  providers: [
  ]
})

export class AccountSearchModule { }
