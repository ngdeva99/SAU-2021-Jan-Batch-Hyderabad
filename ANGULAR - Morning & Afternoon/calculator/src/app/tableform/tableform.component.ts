import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

import { HeaderComponent} from '../header/header.component';
import {customdate} from './customdate.pipe';
import { UserServiceService } from '../services/user-service.service';
import _ from 'lodash';


@Component({
  selector: 'app-tableform',
  templateUrl: './tableform.component.html',
  styleUrls: ['./tableform.component.css']
})
export class TableformComponent implements OnInit {
  

  constructor(public user:UserServiceService) { }

  ngOnInit(): void {
    this.userlist = this.user.getUserDetails();
  }


  userForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
  });

  errormsg:string | undefined;
  userlist:string[] = [];
  selectedCol:string | undefined;
  selectedType:string = 'asc';

  deleteSession(){
    this.user.delAllUsers();
    this.userlist = [];
    return false;
  }

  onSubmit(){
    if(this.userForm.invalid){
      console.log('Validation error',this.userForm.value);
      this.errormsg = "All fields are required";
    }else{
      this.errormsg = "";

      this.userlist.push(this.userForm.value);
      this.user.pushuserdetails(this.userlist);
      console.log(this.userlist);
      this.userForm.reset();
    }
    return false;
  }

  sortdata(){
    this.userlist =  _.orderBy(this.userlist, [this.selectedCol], [this.selectedType]);
  }


  }

  //this.k = JSON.parse(sessionStorage.getItem('currentUser'));
}
