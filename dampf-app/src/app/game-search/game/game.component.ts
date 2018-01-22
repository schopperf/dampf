import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {GameAccount} from "../../entities/gameAccount";
import {GameAccountService} from "../../services/gameAccount.service";
import {Game} from "../../entities/game";
import {GameService} from "../../services/game.service";


@Component({
  selector: 'game',
  templateUrl: './game.component.html',
})

export class GameComponent implements OnInit {

  @Input() id: number;

  game: Game;
  gameList: Game[];

  ngOnInit(): void {

  }


  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private gameAccountService: GameAccountService) {
    console.log("Game Constructor");

    //Parameter AccountId holen
    this.route.params.subscribe(params => {this.id = +params['id'];});

    //Hole angeklickten Account
    this.gameService
      .findById(this.id)
      .subscribe(
        (game) => {
          this.game = game;
        },
        (errResp) => {
          console.error('Error loading games', errResp);
        },
      );

    //TODO: Alle User, die dieses Spiel besitzen

  }

  delete()
  {

    this.gameService
      .deleteGame(this.id)
      .subscribe(
        (game) => {
          console.log("Delete Game: " + game);
        },
        (errResp) => {
          console.error('Error loading games', errResp);
        },
      );

  }



}
