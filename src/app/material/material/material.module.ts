import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


const components:any=[
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports:[
    components
  ]
})
export class MaterialModule { }
