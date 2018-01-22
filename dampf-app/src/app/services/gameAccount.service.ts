
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {GameAccount} from "../entities/gameAccount";
import {Injectable} from "@angular/core";
import {Account} from "../entities/account";
import {Game} from "../entities/game";

@Injectable()
export class GameAccountService{

  constructor(private http: HttpClient){}

  gameAcc:GameAccount;

  public findAllGameAccounts()
  {
    let url = 'http://localhost:8080/gameAccounts';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http
      .get<GameAccount[]>(url, {headers});
  }

  public findAllGameAccountsForAccount(accountId: number)
  {
      let url = 'http://localhost:8080/gameAccounts/search/findByAccount_Id';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('Id', accountId+"");

    return this.http
      .get<GameAccount[]>(url, {headers, params});
  }


  public createGameAccount(game:Game, account:Account)
  {
    let url = 'http://localhost:8080/gameAccounts';

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

    this.gameAcc.id = NaN;
    this.gameAcc.game = game;
    this.gameAcc.account = account;


    return this.http
      .post(url, this.gameAcc,{headers:headers});
  }
}
