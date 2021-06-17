import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrapagePage } from './otrapage.page';

const routes: Routes = [
  {
    path: '',
    component: OtrapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrapagePageRoutingModule {}
