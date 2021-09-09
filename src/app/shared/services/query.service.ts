import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { Employee } from '../models/employee';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public employeeList: Array<Employee> = [];


  constructor( public angularfirestore: AngularFirestore,
    public dataservice:DataService ,
    public auth:AuthService,
    public toastr: ToastrService,
    ) { }

  public getEmployeeList(){
    this.employeeList =[];
 return this.angularfirestore.collection('employees').snapshotChanges()
 
 .subscribe((data)=>{
   data.map( 
     res=>{
      const employeeValue= res.payload.doc.data() as Employee
      this.employeeList.push(employeeValue)
      this.dataservice.setEmployees(this.employeeList)
    }
   )
 });
  }

  public async updateEmployee(employee:Employee){
    return  await this.angularfirestore.doc('employees/' + employee.uid).update(employee).catch((err)=>{
      this.toastr.error(err.message)

    }).then(()=>{
      this.toastr.success(' successfully updated!');
    })

  }

  public  getEmployee(uid?:string){

   return this.angularfirestore.collection(`employees`).doc(uid).snapshotChanges();
 
  }
  //get profile of logged in user
  public  getCurrentUser(){
    this.auth.isLoggedIn().subscribe((user)=>(
      this.getEmployee(user?.uid).subscribe((data:any)=>{
        const userVal= data.payload.data() as Employee
        this.dataservice.setCurrentUser(userVal);
        // console.log(userVal)
      })
    ))
  }
}
