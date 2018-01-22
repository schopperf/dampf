import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {GameAccount} from "../../entities/gameAccount";
import {GameAccountService} from "../../services/gameAccount.service";
import {Game} from "../../entities/game";
import {GameService} from "../../services/game.service";
import {AuthGuard} from "../../shared/auth/auth.guard";
import {AuthService} from "../../shared/auth/auth.service";


@Component({
  selector: 'game',
  templateUrl: './game.component.html',
})

export class GameComponent implements OnInit {

  @Input() id: number;

  game: Game;
  loginId: number;

  ngOnInit(): void {

  }


  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private gameAccountService: GameAccountService,
              private authService:AuthService) {
    console.log("Game Constructor");

    //Parameter GameId holen
    this.route.params.subscribe(params => {this.id = + params['id'];});

    this.loginId = authService.loginAccountId;

    //Hole angeklicktes Game
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


  addToAccount()
  {

    this.gameAccountService
      .createGameAccount(this.game,this.authService.loginAccount)
      .subscribe(
      (game) => {
        console.log("Create GameAccount: " + this.game.id);
      },
      (errResp) => {
        console.error('Error loading games', errResp);
      },
    );
  }



}
