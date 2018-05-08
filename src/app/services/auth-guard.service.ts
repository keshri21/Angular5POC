import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

constructor(private loginService: LoginService, private router: Router){

}
  canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
    return this.loginService.isLoggedIn()
        .then(
          (authenticated: boolean) => {
            console.log('resolved  and user is authenticated: ' + authenticated);
            if(authenticated){
              return true;
            }else{
              this.router.navigate(['/']);
            }
          }
        );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
    return this.canActivate(route, state);
  }
}
