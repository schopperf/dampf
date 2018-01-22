import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../entities/account";
import {AccountService} from "../../services/account.service";
import {GameAccountService} from "../../services/gameAccount.service";
import {Game} from "../../entities/game";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'account',
  templateUrl: './account.component.html',
})

export class AccountComponent implements OnInit {

  @Input() id: number;

  account: Account;
  gameList: Game[] = [];
  links: string[] = [];
  tmp: any;

  ngOnInit(): void {

  }

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private gameAccountService: GameAccountService,
              private http: HttpClient) {
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
          this.tmp = gameAccount["_embedded"]["gameAccounts"]
            .map(function (gameAcc)
            {
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



  testClick()
  {
    console.log("LINKS:");
    console.log(this.tmp);

    this.gameList = [];
    let headers = new HttpHeaders().set('Accept', 'application/json');

    for (let g of this.tmp) {
      this.http
        .get(g,{headers})
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
