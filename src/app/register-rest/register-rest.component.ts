import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-register-rest',
  templateUrl: './register-rest.component.html',
  styleUrls: ['./register-rest.component.scss']
})
export class RegisterRestComponent implements OnInit {
  alert:boolean=false
  signRest= new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl('')
  })


  constructor(private rest:RestService) { }

  ngOnInit(): void {
  }
restRegister(){
  console.warn(this.signRest.value);
  this.rest.registerUser(this.signRest.value).subscribe((result)=>
  {
   this.alert=true
  });

}
closeAlert(){
  this.alert=false
}
}
