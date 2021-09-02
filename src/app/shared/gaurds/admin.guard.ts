import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QueryService } from '../services/query.service';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private readonly queryservice: QueryService,
    public router: Router,
    private readonly authservice: AuthService,
    public toastr: ToastrService,


    
    ) {
     }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isAuthenticated :boolean= true;
    this.authservice.isLoggedIn().subscribe((val)=>{
        console.log(val)
        this.queryservice.getEmployee(val?.uid).subscribe((res)=>{
            const user = res.payload.data() as Employee
            const role =user?.personalDetails?.role
                    console.log(role)

            if( role?.includes("admin") && role !==undefined){ 
                isAuthenticated = true
            }
            else{
                isAuthenticated =false;
                // console.log("not authorised")
                this.toastr.warning('Only admin user allowed !');

                // this.router.navigate([''])
            }
        })
    })
console.log()
return isAuthenticated;
  }
  
}
