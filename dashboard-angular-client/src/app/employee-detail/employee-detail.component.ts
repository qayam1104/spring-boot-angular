import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeDetail:Employee;
  employee:Employee;
  id:Number;
  employees:Observable<Employee[]>;
  employeeId:Number;
  deptId:Number;

  constructor(private empl:EmployeeService, private route:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.employee=new Employee();

   this.id=this.route.snapshot.params['id'];
   this.deptId=this.route.snapshot.params['deptId'];
   console.log("id is"+this.id);
   console.log("id is"+this.deptId);
   
   this.employees=this.empl.getEmployeeList(this.deptId);

   this.employees.subscribe(data=>{
    data.filter(data=>data.epmloyee_id==this.id).map(data=>this.employee=data);

   
});
}

   

   

  list(){
  this.router.navigate(['home/empList',this.deptId]);
  }

}
