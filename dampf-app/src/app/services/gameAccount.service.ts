
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {GameAccount} from "../entities/gameAccount";
import {Injectable} from "@angular/core";

@Injectable()
export class GameAccountService{

  constructor(private http: HttpClient){}


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
}
