import {Injectable} from "@angular/core";
import {Account} from "../../entities/account";

@Injectable()
export class AuthService {
  loginAccountId: number;
  loginAccount: Account;
  //loginAccountRole: string;

  constructor() { }

  login(account: Account) {
    this.loginAccount = account;
    this.loginAccountId = account.id;
    /*switch (account.loginname) {
      case 'admin':
        this.loginAccountRole = 'ADMIN';
        break;
      default:
        this.loginAccountRole = 'USER';
    }*/
    console.log("Login: " + account.nickname);
  }

  logout() {
    this.loginAccountId = null;
    this.loginAccount = null;
    //this.loginAccountRole = null;
  }

}
