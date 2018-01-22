import {Component, Input, OnInit} from "@angular/core";
import {GameService} from "../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../../entities/game";

@Component({
  selector: 'game-edit',
  templateUrl: './game-edit.component.html',
})


export class GameEditComponent implements OnInit {


  @Input() id: number;

  game: Game;

  name: string;
  releaseYear: number;
  price: number;
  ageRestriction: number;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router){

  }

  ngOnInit()
  {
    this.route.params.subscribe(params => {this.id = +params['id'];});

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


  save()
  {
    console.log(this.price);
    this.gameService
      .updateGame(this.game)
      .subscribe(tmp => {
          console.log("Updated: " + this.game.name);
          this.router.navigate(['game-search']);
        },
        (error) => {
          console.log("An Error occured while creating the account!");
        });



  }
}
