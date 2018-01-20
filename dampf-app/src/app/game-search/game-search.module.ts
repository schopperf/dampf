import {GameSearchComponent} from "./game-search.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {APP_ROUTES} from "../app.routes";
import {RouterModule} from "@angular/router";
import {GameComponent} from "./game/game.component";
import {GameAddComponent} from "./game-add/game-add.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    GameSearchComponent,
    GameComponent,
    GameAddComponent
  ],
  exports: [
    GameSearchComponent,
    GameComponent,
    GameAddComponent
  ],
  providers: [
  ]
})

export class GameSearchModule {


}
