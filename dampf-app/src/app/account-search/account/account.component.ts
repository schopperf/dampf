import {Component, Input, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../entities/account";



@Component({
  selector: 'account',
  templateUrl: './account.component.html',
})

export class AccountComponent implements OnInit {

  @Input() id: number;

  account: Account;

  ngOnInit(): void {

  }


  constructor(private route: ActivatedRoute, private http: HttpClient) {
    console.log("Account Constructor");

    this.route.params.subscribe(params => {this.id = +params['id'];});


    let url = 'http://localhost:8080/accounts/search/findById';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('id', this.id + '');


    this.http.get<Account>(url, {headers, params})
      .subscribe(
        (account) => {
          this.account = account;
        },
        (errResp) => {
          console.error('Error loading accounts', errResp);
        },
      );
  }


}
