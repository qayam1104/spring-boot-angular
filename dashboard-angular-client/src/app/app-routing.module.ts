import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmployeeInfoListComponent } from './employee-info-list/employee-info-list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


const routes: Route[] = [
  {path:'Details/:id/:deptId',component:EmployeeDetailComponent },
  {path:'home', component:HomeComponent,
  children:[
    {path:'empList/:deptId',component:EmployeeInfoListComponent}
  ]

},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
