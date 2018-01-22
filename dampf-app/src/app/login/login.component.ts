import {Component, OnInit} from "@angular/core";
import {AuthService} from "../shared/auth/auth.service";
import {AccountService} from "../services/account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }


  error: boolean;

  constructor(private authService: AuthService,
              private accountService: AccountService,
              private formBuilder: FormBuilder,
              private router: Router) {
    console.log("Login Constructor");

  }

  loginName:string;
  password:string;
  message:string;

  login() {
    console.log("LOGIN START:");
    console.log(this.loginName);
    console.log(this.password);

    this.accountService
      .findByUsernameAndPassword(this.loginName, this.password)
      .subscribe(
      (account) => {
        this.error = false;
        console.log("LOGIN: " + account);
        this.authService.login(account);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.error = true;
      }
    );
    console.log("LOGIN END:");
  }
}
