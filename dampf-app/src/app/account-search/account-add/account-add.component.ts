import {Component, OnInit} from "@angular/core";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css'],

})


export class AccountAddComponent implements OnInit {
  addForm: FormGroup;


  nickname: string;
  loginName: string;
  email: string;
  registerDate: number;

  constructor(private accountService:AccountService,
              private router: Router,
              private fb: FormBuilder) {

  }

  ngOnInit()  {
    this.addForm = this.fb.group({
      nickname: [null, [Validators.required, Validators.minLength(1)]],
      loginName:  [null, [Validators.required, Validators.minLength(1)]],
      email:  [null],
      registerDate: [null, [Validators.required, Validators.pattern('^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$')]]


    });
    console.log(this.addForm.value);
    console.log(this.addForm.valid);
    console.log(this.addForm.touched);
    console.log(this.addForm.dirty);

  }


  save()  {
    this.accountService
      .createAccount(this.nickname, this.loginName, this.email, this.registerDate)
      .subscribe(customer => {
          console.log("Account was created successfully!");
          this.router.navigate(['account-search']);
        },
        (error) => {
          console.log("An Error occured while creating the account!");
        });



  }
}
