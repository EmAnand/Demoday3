import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myForm!: FormGroup; 
  constructor(private builder:FormBuilder) {
    
   }

  ngOnInit(): void {
    this.myForm = this.builder.group({

      name: [],
      surname: [],
      email : ['', [Validators.required, checkEmailfun('vikash@yahoo.com')]],
      
     education: new FormGroup({
        dgree :new FormControl(),
        stream : new FormControl(),
      })
      
    })
    // this.myForm.patchValue({
    //   name:'vikash',
    //   surname:'kumar',
    //   email:'vikash.chhotu90@gmail.com',
    //   education:{
    //     dgree:'B.tech',
    //     stream:'Electronics'
      
    //   }
      
      
    // })

  }
 toSubmit(){
  //  this.myForm.valueChanges.subscribe(val => console.log(val)) ;
  Object.keys(this.myForm.controls).forEach(key => {
    this.myForm.controls[key].reset();
    //console.log(key);
  });
   
 }
}

function checkEmailfun(emailID:string)  {
return   (control: AbstractControl): {[key: string]:any} | null =>{
      return control.value != emailID ? { 'checkEmailkey': true}:null
  };
}