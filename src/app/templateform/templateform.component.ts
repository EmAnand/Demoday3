import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  @ViewChild("f") myform : NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  toSubmit(f:NgForm){
    console.log(f);
  }
  //checkval(){
    //console.log(this.myform);
  //}

}

    