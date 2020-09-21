import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitedVar: any;
  fullName: any;
  emailId: any;
  messageFrom: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(sessionStorage.getItem('name'));
    this.fullName = sessionStorage.getItem('name');
    this.emailId = sessionStorage.getItem('email');
    this.messageFrom = sessionStorage.getItem('msg')
    
    this.contactForm = this.fb.group({
      fullname: [''],
      email: [''],
      message: ['']
    })
    // this.submitedVar = this.route.queryParams.subscribe(params => {
    //     this.fullName = params.userName;
    //     this.emailId = params.email;
    //     this.messageFrom = params.message;
    // })
    this.contactForm.get('fullname').setValue(this.fullName);
    this.contactForm.get('email').setValue(this.emailId);
    this.contactForm.get('message').setValue(this.messageFrom);
  }

  submit(){
    console.log("your Data", this.contactForm.value);
  }

  backToHome(){
    this.router.navigateByUrl('');
  }
}
