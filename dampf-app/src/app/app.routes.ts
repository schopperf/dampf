import {Routes} from "@angular/router";
import {AccountSearchComponent} from "./account-search/account-search.component";
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account-search/account/account.component";
import {InfoComponent} from "./info/info.component";
import {GameSearchComponent} from "./game-search/game-search.component";
import {GameComponent} from "./game-search/game/game.component";
import {GameAddComponent} from "./game-search/game-add/game-add.component";
import {LoginComponent} from "./login/login.component";
import {GameEditComponent} from "./game-search/game-edit/game-edit.component";
import {GameDeleteComponent} from "./game-search/game-delete/game-delete.component";
import {AuthGuard} from "./shared/auth/auth.guard";
import {ProfileComponent} from "./profile/profile.component";
import {AccountAddComponent} from "./account-search/account-add/account-add.component";
import {AccountDeleteComponent} from "./account-search/account-delete/account-delete.component";
import {AccountEditComponent} from "./account-search/account-edit/account-edit.component";

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
  //ACCOUNT
  {
    path: 'account-search',
    component: AccountSearchComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  },

  {
    path: 'account-add',
    component: AccountAddComponent
  },
  {
    path: 'account-edit/:id',
    component: AccountEditComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'account-delete/:id',
    component: AccountDeleteComponent,
    canActivate:[AuthGuard]

  },
  //GAME
  {
    path: 'game-search',
    component: GameSearchComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: 'game-edit/:id',
    component: GameEditComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'game-add',
    component: GameAddComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'game-delete',
    component: GameDeleteComponent,
    canActivate:[AuthGuard]
  },
  //Other
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }
];
