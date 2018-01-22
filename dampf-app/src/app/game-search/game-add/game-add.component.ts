import {Component, OnInit} from "@angular/core";
import {GameService} from "../../services/game.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css'],

})


export class GameAddComponent implements OnInit {
  addForm: FormGroup;


  name: string;
  releaseYear: number;
  price: number;
  ageRestriction: number;

  constructor(private gameService:GameService,
              private router: Router,
              private fb: FormBuilder) {

  }

  ngOnInit()  {
    this.addForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1)]],
      releaseYear:  [null, [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      price:  [null, [Validators.required, Validators.pattern('^[1-9][0-9]?$')]],
      ageRestriction: [null, [Validators.required, Validators.pattern('^[1-9][0-9]?$')]]


    });
    console.log(this.addForm.value);
    console.log(this.addForm.valid);
    console.log(this.addForm.touched);
    console.log(this.addForm.dirty);

  }


  save()  {
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
