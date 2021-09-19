import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { Employee ,msg } from '../models/employee';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  // public employeeList: Array<Employee> = [];


  constructor( public angularfirestore: AngularFirestore,
    public dataservice:DataService ,
    public auth:AuthService,
    public toastr: ToastrService,
    ) { }

  public async getEmployeeList(){
    let emplys :Array<Employee> = []
    // console.log(this.employeeList
 return  await this.angularfirestore.collection('employees').snapshotChanges()
 
 .subscribe((data)=>{
   data.map( 
     res=>{
      const employeeValue= res.payload.doc.data() as Employee
      emplys.push(employeeValue)
      // console.log(emplys)

      this.dataservice.setEmployees(emplys)
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
  public getMessages(employee:Employee){
    return  this.angularfirestore.doc('employees/' + employee.uid).collection('messages').snapshotChanges()
  }

  public async messageEmployee(employee:Employee ,msg:msg){
    return  await this.angularfirestore.doc('employees/' + employee.uid).collection('messages').add(msg).catch((err)=>{
      this.toastr.error(err.message)

    }).then(()=>{
      this.toastr.success(' successfully updated!');
    })

  }

  public  getEmployee(uid?:string){

   return this.angularfirestore.collection(`employees`).doc(uid).snapshotChanges();
 
  }
  
}
