import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrapagePageRoutingModule } from './otrapage-routing.module';

import { OtrapagePage } from './otrapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrapagePageRoutingModule
  ],
  declarations: [OtrapagePage]
})
export class OtrapagePageModule {}
