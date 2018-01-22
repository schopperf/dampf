import {Component, Input, OnInit} from "@angular/core";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Account} from "../../entities/account";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css'],

})


export class AccountEditComponent implements OnInit {
  editForm: FormGroup;


  @Input() id: number;

  account: Account;

  nickname: string;
  loginName: string;
  email: string;
  registerDate: number;

  constructor(private accountService: AccountService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder){

  }

  ngOnInit()
  {
    this.editForm = this.fb.group({
      nickname: [null],
      loginName:  [null],
      email:  [null],
      registerDate: [null]


    });

    this.route.params.subscribe(params => {this.id = +params['id'];});

    this.accountService
      .findById(this.id)
      .subscribe(
        (account) => {
          this.account = account;
        },
        (errResp) => {
          console.error('Error loading accounts', errResp);
        },
      );

    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    console.log(this.editForm.touched);
    console.log(this.editForm.dirty);
  }


  save()  {
    this.accountService
      .updateAccount(this.account)
      .subscribe(tmp => {
          console.log("Updated: " + this.account.nickname);
          this.router.navigate(['account-search']);
        },
        (error) => {
          console.log("An Error occured while creating the account!");
        });



  }

}
