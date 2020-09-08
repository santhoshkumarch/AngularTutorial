import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
username: string;
email: string;
  userName: string;
  Email: string;
  isSubmit: boolean = false;

  foods: Food[] = [
    {value: '0', viewValue: 'Mr'},
    {value: '1', viewValue: 'Mrs'},
    {value: '2', viewValue: 'Ms'}
  ];
  prefix: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  gotoContact(){
    this.router.navigateByUrl('contact')
  }

  onSubmit(){
    this.isSubmit = true;
    this.userName = this.username;
    this.Email = this.email;
  }

  onChange(event){
    let v;
    let vv;
    _.forEach(event, v => {
      v = v.value
      if(v == '0'){
      this.prefix = 'Mr'
    } else if( v == '1'){
      this.prefix = 'Mrs'
    } else if( v == '2'){
      this.prefix = 'Ms'
    } else {
      this.prefix = ''
    }
    });

    console.log("event", event);
    
  }

}
