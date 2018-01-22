import {Component, Input, OnInit} from "@angular/core";
import {GameService} from "../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../../entities/game";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css'],

})


export class GameEditComponent implements OnInit {
  editForm: FormGroup;


  @Input() id: number;

  game: Game;

  name: string;
  releaseYear: number;
  price: number;
  ageRestriction: number;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder){

  }

  ngOnInit()
  {
    this.editForm = this.fb.group({
      id: [],
      name: [null, [Validators.required, Validators.minLength(1)]],
      releaseYear:  [null, [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      price:  [null, [Validators.required, Validators.pattern('^[1-9][0-9]?$')]],
      ageRestriction: [null, [Validators.required, Validators.pattern('^[1-9][0-9]?$')]]


    });

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

    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    console.log(this.editForm.touched);
    console.log(this.editForm.dirty);
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
