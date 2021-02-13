import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'

@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.scss']
})
export class ListRestComponent implements OnInit {
alert:boolean=false
  constructor(private rest:RestService) { }
collection:any={};
  ngOnInit(): void {
    this.rest.getList().subscribe((result)=>{this.collection=result })
  }
deleteRest(items:any[]){
  // this.collection.splice(items-1,'1')
  this.rest.deleteRest(items).subscribe((result)=>{
    // console.warn('result', result)
    this.alert=true
  })
}
closeAlert(){
  this.alert=false
}
}
