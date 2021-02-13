import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {RestService} from '../rest.service';


@Component({
  selector: 'app-update-rest',
  templateUrl: './update-rest.component.html',
  styleUrls: ['./update-rest.component.scss']
})
export class UpdateRestComponent implements OnInit {
  alert:boolean=false
//   EditRest=new FormGroup({
//    name:new FormControl(''),
//    address:new FormControl(''),
//    email:new FormControl('')
//  })
EditRest: any;
  constructor(private router:ActivatedRoute,private rest:RestService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.rest.getCurrentValue(this.router.snapshot.params.id).subscribe((result: any)=>{
      console.log("result",result)
      this.EditRest=new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
    })
  })
}
  collection(){
    console.warn(this.EditRest.value),
    this.rest.updateRest(this.router.snapshot.params.id,this.EditRest.value).subscribe((result)=>{
     this.alert=true
    })

  }
  closeAlert(){
    this.alert=false;
  }
}
