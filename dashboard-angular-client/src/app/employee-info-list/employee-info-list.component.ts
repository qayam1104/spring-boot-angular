import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-info-list',
  templateUrl: './employee-info-list.component.html',
  styleUrls: ['./employee-info-list.component.css']
})
export class EmployeeInfoListComponent implements OnInit {

employees:Observable<Employee[]>;
 
deptId:Number;
  constructor(private empl:EmployeeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(){
    this.deptId=this.route.snapshot.params['deptId'];
    
    

    this.loadData();
    
    

  }

  loadData()
{
  this.employees=this.empl.getEmployeeList(this.deptId);
}

employeeDetail(id:Number,deptId:Number){
this.router.navigate(['Details',id,deptId]);
}


}
