import { Injectable } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService as Authorise } from '../services/auth.service';
import { Employee } from '../models/employee';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ManagerGaurd implements CanActivate {

  constructor(
    private readonly queryservice: QueryService,
    public router: Router,
    public auth:Authorise,
    public toastr: ToastrService,

  ) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    var isAuthenticated = false;
this.queryservice.getEmployee().subscribe((res)=>{
    const user = res.payload.data() as Employee
    const role =user.personalDetails?.role
    if( role?.includes("manager") && role !==undefined){ 
        isAuthenticated = true
    }
    else{
        isAuthenticated =false;
        this.toastr.warning('Only manager user allowed !');

        this.router.navigate([''])
    }
})
return isAuthenticated;
  }
}
