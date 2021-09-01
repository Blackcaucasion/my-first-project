import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService as Authorise } from '../services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {




  constructor(
    public dataservice:DataService ,
    public router: Router,
    public auth:Authorise
    
  ) {
    this.auth.isLoggedIn();
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
     var isAuthenticated = false;
      this.dataservice.LogInState.subscribe((user)=>{
       
        if(!user){
          isAuthenticated = false;
          console.log("not authorised")
          this.router.navigate([''])
        }else{
          isAuthenticated =true
          return true;
        }

      })
      return isAuthenticated;

}
  
}
