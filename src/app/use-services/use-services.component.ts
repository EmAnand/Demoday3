import { Component, OnInit } from '@angular/core';
import { GetServicesService } from '../get-services.service';

@Component({
  selector: 'app-use-services',
  templateUrl: './use-services.component.html',
  styleUrls: ['./use-services.component.css'],
  providers: [GetServicesService]
})
export class UseServicesComponent implements OnInit {
data:any;
  constructor( private httpServices:GetServicesService) {
   this.httpServices.getweather().subscribe(d =>  
    {
      console.log(d)
      this.data=d
    
    }
   )
    const{data}=this.data;
    console.log(data);
  }

  ngOnInit(): void {
  }

}
