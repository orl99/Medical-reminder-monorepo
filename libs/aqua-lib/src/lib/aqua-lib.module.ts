import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploaderComponent } from './photo-uploader/photo-uploader.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    PhotoUploaderComponent
  ],
  exports: [
    PhotoUploaderComponent
  ]
})
export class AquaLibModule {}
