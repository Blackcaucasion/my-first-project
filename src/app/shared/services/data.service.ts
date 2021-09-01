import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';
import { QueryService } from './query.service';
import {User} from '@firebase/auth-types';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public employ: any = {};
  public user:any={};
  //needs to firebase user
  public User$: BehaviorSubject<any> = new BehaviorSubject<any>(this.user);
  public myProfileUser$: BehaviorSubject<any> = new BehaviorSubject<any>(this.employ);
  public employeeList: Array<Employee> = [];
  public employees$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>(this.employeeList);
  public employee$ = new BehaviorSubject<Employee>(this.employ)

  constructor() { }

  public get employees() {
    return this.employees$;
  }
  public setEmployees(employee: Employee[]) {
    this.employees$.next(employee);
  }


  public setEmployee(employee: Employee) {
    this.employee$.next(employee);
    // console.log("at hare" + employee)
  }
 public get CurrentUser(){
   return this.myProfileUser$;
 }
  public setCurrentUser(employ:any){
    return this.myProfileUser$.next(employ);
  }
  public getEmployee() {
    return this.employee$;
  }
  public get LogInState(){
    return this.User$;
  }
  public setLoginState(user:any){
    return this.User$.next(user);
  }

  



}
