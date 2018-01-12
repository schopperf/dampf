import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Account} from "../entities/account";

@Component({
  selector: 'account-search',
  templateUrl: './account-search.component.html',

})


export class AccountSearchComponent implements OnInit
{
  ngOnInit(): void {
  }

  nickname: string;
  accounts: Array<Account> = [];
  selectedAccount: Account;

  constructor(private http: HttpClient) {
    console.log("AccountSearch Constructor");
  }


  select(a: Account): void {
    this.selectedAccount = a;
    console.log("AccountSearch Select");
  }


  search(): void {
    console.log("AccountSearch Search");

    let url = 'http://localhost:8080/accounts';

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');


    let params = new HttpParams()
      .set('nickname', this.nickname);

    console.log(this.nickname);

    this.http
      .get<Account[]>(url, {headers, params})
      .subscribe(
        (accounts: Account[]) => {
          this.accounts = accounts;
        },
        (errResp) => {
          console.error('Error loading accounts', errResp);
        },
      );

  }



}