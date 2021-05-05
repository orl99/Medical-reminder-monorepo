import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalCapturePage } from './medical-capture.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalCapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalCapturePageRoutingModule {}
