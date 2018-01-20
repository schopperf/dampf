import {Component, OnInit} from "@angular/core";
import {GameService} from "../services/game.service";
import {Game} from "../entities/game";

@Component({
  selector: 'game-search',
  templateUrl: './game-search.component.html',

})


export class GameSearchComponent implements OnInit
{
  ngOnInit(): void {
  }

  nickname: string;
  games: Array<Game> = [];

  constructor(private gameService: GameService) {
    console.log("GameSearch Constructor");
  }

  search(): void {
/*
    this.gameService.
      findByNicknameContaining(this.nickname)
      .subscribe(
      (accounts) => {
        this.accounts = accounts['_embedded']['accounts'];

      },
      (errResp) => {
        console.error('Error loading accounts', errResp);
      },
    );

    console.log(this.accounts);
*/
  }


  getAllGames(): void {
    console.log("GameSearch Search");

    this.gameService
      .findAllGames()
      .subscribe(
        (games) => {
          this.games = games['_embedded']['games'];

        },
        (errResp) => {
          console.error('Error loading games', errResp);
        },
      );

  }


}
