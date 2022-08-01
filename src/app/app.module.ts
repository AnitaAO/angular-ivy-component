import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ 
    AppComponent,
    CoursesComponent,  
    
  ],
  bootstrap:    [ AppComponent ],
  imports:      [ 
    BrowserModule, 
    FormsModule 
  ],
})
export class AppModule { }
