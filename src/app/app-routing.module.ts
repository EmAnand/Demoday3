import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';

import { TemplateformComponent } from './templateform/templateform.component';
import { UseServicesComponent } from './use-services/use-services.component';

const routes: Routes = [
  {path:'template',component:TemplateformComponent},
  {path:'reactive', component:ReactiveComponent},
  {path:'services', component:UseServicesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
