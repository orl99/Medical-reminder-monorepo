import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalCapturePageRoutingModule } from './medical-capture-routing.module';

import { MedicalCapturePage } from './medical-capture.page';
import { AquaLibModule } from '@orly/aqua-lib';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalCapturePageRoutingModule,
    AquaLibModule,
  ],
  declarations: [MedicalCapturePage]
})
export class MedicalCapturePageModule {}
