import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Game} from "../entities/game";
import {AccountService} from "../services/account.service";
import {GameAccountService} from "../services/gameAccount.service";
import {AuthService} from "../shared/auth/auth.service";
import {Account} from "../entities/account";


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  account: Account;
  gameList: Game[] = [];
  links: string[] = [];
  tmp: any;

  ngOnInit(): void {

  }

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private gameAccountService: GameAccountService,
              private http: HttpClient,
              private authService: AuthService) {
    console.log("Account Constructor");

    console.log(this.authService.loginAccountId);
    //Hole eingeloggten Account
    this.accountService
      .findById(this.authService.loginAccountId)
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
      .findAllGameAccountsForAccount(authService.loginAccountId)
      .subscribe(
        (gameAccount) => {
          this.tmp = gameAccount["_embedded"]["gameAccounts"]
            .map(function (gameAcc) {
              return gameAcc["_links"]["game"]["href"];
            });
        },
        (errResp) => {
          console.error('Error loading GameAccounts', errResp);
        },
      );

    console.log("THIS");
    console.log(this.tmp);


    //console.log("THIS:");
    //console.log(this);
  }


  testClick() {
    console.log("LINKS:");
    console.log(this.tmp);


    let headers = new HttpHeaders().set('Accept', 'application/json');

    for (let g of this.tmp) {
      this.http
        .get(g, {headers})
        .subscribe(
          (game) => {
            console.log(game);
            this.gameList.push(game as Game);
          },
          (errResp) => {
            console.error('Error loading accounts', errResp);
          },
        );
    }

  }
}
