import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IonicModule } from '@ionic/angular';
import { HeaderRotaComponent } from '../header-rota/header-rota.component';



@NgModule({
  declarations: [HeaderComponent, HeaderRotaComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule
  ],
  exports:[ HeaderComponent, HeaderRotaComponent ]
})
export class SharedModule { }
