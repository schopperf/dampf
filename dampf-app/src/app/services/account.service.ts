
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Account} from "../entities/account";
import {Injectable} from "@angular/core";


@Injectable()
export class AccountService{

  constructor(private http: HttpClient){}

  public findByNicknameContaining(nickname: string)
  {
    let url = 'http://localhost:8080/accounts/search/findByNicknameContaining';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('nickname', nickname);


    return this.http
      .get<Account[]>(url, {headers, params});
  }

  public findById(id: number)
  {
    let url = 'http://localhost:8080/accounts/search/findById';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('id', id + '');


    return this.http
      .get<Account>(url, {headers, params});
  }

  findByUsernameAndPassword (loginName: string, password: string) {
    let url = 'http://localhost:8080/accounts/search/findByLoginNameAndPassword';
    let headers = new HttpHeaders().set('Accept', 'application/json');
    let params = new HttpParams()
      .set('loginName', loginName)
      .set('password', password);

    return this
      .http
      .get<Account>(url, {headers,params});

  }
  public createAccount(nickname: string, loginName:string, email:string, registerDate:number)
  {
    let url = 'http://localhost:8080/accounts';

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');



    return this.http
      .post(url,{nickname:nickname, loginName:loginName, email:email,registerDate:registerDate,
        }, {headers:headers});
  }


  updateAccount(account: Account) {


    let url = 'http://localhost:8080/accounts/' + account.id;
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .put(url, account,{headers});
  }


  deleteAccount(accountId: number)
  {
    let url = 'http://localhost:8080/accounts/' + accountId;
    let headers = new HttpHeaders().set('Accept', 'application/json');



    return this
      .http
      .delete(url, {headers});
  }
}
