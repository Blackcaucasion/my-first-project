import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService as Authorise, AuthService } from '../services/auth.service';
import { QueryService } from '../services/query.service';
import { Employee } from '../models/employee';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurd implements CanActivate {

  constructor(
    private readonly queryservice: QueryService,
    public router: Router,
    public auth:Authorise,
    private readonly authservice: AuthService,
    public toastr: ToastrService,


    
    ) {
        this.auth.isLoggedIn();
     }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    var isAuthenticated = false;
    this.authservice.isLoggedIn().subscribe((val)=>{
        // console.log(val)
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

                this.router.navigate([''])
            }
        })
    })

return isAuthenticated;

  }
}
 