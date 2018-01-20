import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../entities/account";
import {AccountService} from "../../services/account.service";
import {GameAccount} from "../../entities/gameAccount";
import {GameAccountService} from "../../services/gameAccount.service";



@Component({
  selector: 'account',
  templateUrl: './account.component.html',
})

export class AccountComponent implements OnInit {

  @Input() id: number;

  account: Account;
  gameAccounts: GameAccount[];

  ngOnInit(): void {

  }

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private gameAccountService: GameAccountService) {
    console.log("Account Constructor");

    //Parameter AccountId holen
    this.route.params.subscribe(params => {this.id = +params['id'];});

    //Hole angeklickten Account
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

    //Hole alle GameAccounts für diesen Account
    this.gameAccountService
      .findAllGameAccountsForAccount(this.id)
      .subscribe(
        (gameAccount) => {
          this.gameAccounts = gameAccount["_embedded"]["gameAccounts"];
        },
        (errResp) => {
          console.error('Error loading accounts', errResp);
        },
      );

      console.log(this.gameAccounts);
  }


}
