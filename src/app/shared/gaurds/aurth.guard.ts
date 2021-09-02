import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AurthGuard implements CanActivate {

  constructor(
    public dataservice:DataService ,
    public router: Router,
    public auth:AuthService,
    public toastr: ToastrService,

    
  ) {
   
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      var isAuthenticated :boolean= true;

      this.auth.isLoggedIn().subscribe((user:any)=>{
       
        if(!user?.uid){
          isAuthenticated = false;
          this.toastr.warning('need to log in !');
          console.log("not authorised")
          this.router.navigate(['/login'])
        }else{
          isAuthenticated =true
        }
      })
      
      return isAuthenticated;
  
}
}
