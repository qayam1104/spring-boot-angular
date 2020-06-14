import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  isClicked:Boolean = true;
  isSubmit:Boolean = true;

  @Input() inputDeptId:Number;

  constructor(private router:Router) { 

  }

  ngOnInit(){
    
  }
  onSubmit(){
    this.navigate(this.inputDeptId);
    }

    navigate(id:Number){
      this.router.navigate(['home/empList',id]);
    }

}
