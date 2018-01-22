import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../entities/account";
import {AccountService} from "../services/account.service";

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

  constructor(private http: HttpClient,
              private accountService: AccountService) {
    console.log("AccountSearch Constructor");
    this.getAllAccounts();
  }

  search(): void {

   /* let url = 'http://localhost:8080/accounts/search/findByNicknameContaining';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('nickname', this.nickname);

    console.log(this.nickname);

    this.http
      .get<Account[]>(url, {headers, params})
      .subscribe(
        (accounts) => {
          this.accounts = accounts['_embedded']['accounts'];

        },
        (errResp) => {
          console.error('Error loading accounts', errResp);
        },
      );*/

    this.accountService.
      findByNicknameContaining(this.nickname)
      .subscribe(
      (accounts) => {
        this.accounts = accounts['_embedded']['accounts'];

      },
      (errResp) => {
        console.error('Error loading accounts', errResp);
      },
    );

    console.log(this.accounts);

  }


  getAllAccounts(): void {
    console.log("AccountSearch Search");

    let url = 'http://localhost:8080/accounts';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    this.http
      .get<Account[]>(url, {headers})
      .subscribe(
        (accounts) => {
          this.accounts = accounts['_embedded']['accounts'];

        },
        (errResp) => {
          console.error('Error loading accounts', errResp);
        },
      );

  }


}
