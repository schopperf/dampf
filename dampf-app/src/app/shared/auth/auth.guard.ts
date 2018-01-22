import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if (this.authService.loginAccount) {
      return true;
    }
    this.router.navigate(['/game-add', { needsLogin: true }])
    return true;
  }

}