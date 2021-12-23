import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PanelComponent } from './panel/panel.component';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  exports:[
    PanelComponent
  ]
})
export class PagesModule { }
