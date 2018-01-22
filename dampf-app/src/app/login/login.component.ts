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


    this.accountService
      .findByUsernameAndPassword(this.loginName, this.password).subscribe(
      (user) => {
        this.error = false;
        console.log(user);
        this.authService.login(user);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
