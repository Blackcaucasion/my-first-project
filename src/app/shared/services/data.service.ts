import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';
import { QueryService } from './query.service';
import {User} from '@firebase/auth-types';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user:any={};
  //needs to firebase user
  public User$: BehaviorSubject<any> = new BehaviorSubject<any>(this.user);


  public myProfileUser$: BehaviorSubject<any> = new BehaviorSubject<any>({} as Employee);
  
  public employeeList: Array<Employee> = [];
  public employees$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>(this.employeeList);

  constructor() { }

  public get employees() {
    return this.employees$;
  }
  public setEmployees(employee: Employee[]) {

    this.employees$.next([]);
    this.employees$.next(employee);
  }

  public setLoginState(user:any){
    return this.User$.next(user);
  }

  



}
