import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent
  ],
  exports:[
HeaderComponent,
BodyComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
