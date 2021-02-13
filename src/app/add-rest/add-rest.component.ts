import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({

  selector: 'app-add-rest',
  templateUrl: './add-rest.component.html',
  styleUrls: ['./add-rest.component.scss'],
})
export class AddRestComponent implements OnInit {
  alert:boolean=false
  addRest = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private rest: RestService) {}

  ngOnInit(): void {}
  restCollect() {
    //  console.warn(this.addRest.value)
    // console.log('test');
    this.rest.saveRest(this.addRest.value).subscribe((Result) => {
      this.alert=true
    this.addRest.reset({})
    });

  }
  deleteRest(items:any){
  this.rest.deleteRest(items).subscribe((Result)=>{
    this.alert=true

  });
  }
  closeAlert(){
    this.alert=false
  }
}
