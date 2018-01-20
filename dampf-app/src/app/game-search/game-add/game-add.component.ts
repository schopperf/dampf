import {Component, OnInit} from "@angular/core";
import {GameService} from "../../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'game-add',
  templateUrl: './game-add.component.html',
})


export class GameAddComponent implements OnInit {


  name: string;
  releaseYear: number;
  price: number;
  ageRestriction: number;

  constructor(private gameService:GameService,
              private router: Router){

  }

  ngOnInit()
  {

  }


  save()
  {
    this.gameService
      .createGame(this.name, this.releaseYear, this.price, this.ageRestriction)
      .subscribe(customer => {
          console.log("Account was created successfully!");
          this.router.navigate(['game-search']);
        },
        (error) => {
          console.log("An Error occured while creating the account!");
        });



  }
}
