import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Observable<any>;
  employees1:Observable<Employee[]>;
  employee:Employee;

  constructor(private httpClient:HttpClient) { }

  getEmployeeList(deptId:Number):Observable<any>{
    this.employees= this.httpClient.get("http://localhost:8082/employees/dept/"+deptId);
    return this.employees;
  }

  getEmplyoee(id:Number):any{
    this.employees1=this.employees;
    this.employees1.subscribe(data=>{
      data.filter(data=>data.epmloyee_id==id).map(data=>this.employee=data);
      return this.employee;
      
      
    })
    };
       
   
  }

