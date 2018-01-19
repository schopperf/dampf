import {Routes} from "@angular/router";
import {AccountSearchComponent} from "./account-search/account-search.component";
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account-search/account/account.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'account-search',
    component: AccountSearchComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
