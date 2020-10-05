import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Section {
  name: string;
  update: Date;
}

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  folders: Section[] = [
    {
      name: "Photos",
      update: new Date('9/9/20'),
    },
    {
      name: "Images",
      update: new Date('9/9/20'),
    },
    {
      name: "Documents",
      update: new Date('9/9/20'),
    },
    {
      name: "Downloads",
      update: new Date('9/9/20'),
    },
  ];

  contactForm: FormGroup;
  submitedVar: any;
  fullName: any;
  emailId: any;
  messageFrom: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  ngOnInit() {
    console.log(sessionStorage.getItem("name"));
    this.fullName = sessionStorage.getItem("name");
    this.emailId = sessionStorage.getItem("email");
    this.messageFrom = sessionStorage.getItem("msg");

    this.contactForm = this.fb.group({
      fullname: [""],
      email: [""],
      message: [""],
    });
    // this.submitedVar = this.route.queryParams.subscribe(params => {
    //     this.fullName = params.userName;
    //     this.emailId = params.email;
    //     this.messageFrom = params.message;
    // })
    this.contactForm.get("fullname").setValue(this.fullName);
    this.contactForm.get("email").setValue(this.emailId);
    this.contactForm.get("message").setValue(this.messageFrom);
  }

  submit() {
    console.log("your Data", this.contactForm.value);
  }

  backToHome() {
    this.router.navigateByUrl("");
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  gotoRoute(){
    this.router.navigateByUrl('/accod')
  }
}
