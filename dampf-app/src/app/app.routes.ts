import {Routes} from "@angular/router";
import {AccountSearchComponent} from "./account-search/account-search.component";
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account-search/account/account.component";
import {InfoComponent} from "./info/info.component";
import {GameSearchComponent} from "./game-search/game-search.component";
import {GameComponent} from "./game-search/game/game.component";
import {GameAddComponent} from "./game-search/game-add/game-add.component";

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
    path: 'game-add',
    component: GameAddComponent
  },
  //REST
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
