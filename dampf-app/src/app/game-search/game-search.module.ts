import {GameSearchComponent} from "./game-search.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {APP_ROUTES} from "../app.routes";
import {RouterModule} from "@angular/router";
import {GameComponent} from "./game/game.component";
import {GameAddComponent} from "./game-add/game-add.component";
import {GameEditComponent} from "./game-edit/game-edit.component";
import {GameDeleteComponent} from "./game-delete/game-delete.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    GameSearchComponent,
    GameComponent,
    GameAddComponent,
    GameEditComponent,
    GameDeleteComponent
  ],
  exports: [
    GameSearchComponent,
    GameComponent,
    GameAddComponent,
    GameEditComponent,
    GameDeleteComponent
  ],
  providers: [
  ]
})

export class GameSearchModule {


}
