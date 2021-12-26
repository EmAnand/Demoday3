import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponent } from './reactive/reactive.component';
import {HttpClientModule} from '@angular/common/http';
import { UseServicesComponent } from './use-services/use-services.component';
import { checkEmailValidator } from './validaters/checkEmailValidators.Diractive';



@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveComponent,
    UseServicesComponent,
    checkEmailValidator
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
