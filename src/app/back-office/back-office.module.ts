import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { AppRoutingModule } from '../app-routing.module';
import { SideBareComponent } from './side-bare/side-bare.component';
import { NavBareComponent } from './nav-bare/nav-bare.component';




@NgModule({
  declarations: [
    BackComponent,
    SideBareComponent,
 NavBareComponent,
 ContentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BackComponent
    
  ]
})
export class BackOfficeModule { }
