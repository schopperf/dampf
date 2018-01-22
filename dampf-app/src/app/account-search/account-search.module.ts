import {AccountSearchComponent} from "./account-search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccountComponent} from "./account/account.component";
import {APP_ROUTES} from "../app.routes";
import {RouterModule} from "@angular/router";
import {AccountService} from "../services/account.service";
import {GameService} from "../services/game.service";
import {AccountAddComponent} from "./account-add/account-add.component";
import {AccountEditComponent} from "./account-edit/account-edit.component";
import {AccountDeleteComponent} from "./account-delete/account-delete.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  declarations: [
    AccountSearchComponent,
    AccountComponent,
    AccountAddComponent,
    AccountDeleteComponent,
    AccountEditComponent

  ],
  exports: [
    AccountSearchComponent,
    AccountAddComponent,
    AccountDeleteComponent,
    AccountEditComponent
  ],
  providers: [
  ]
})

export class AccountSearchModule { }
