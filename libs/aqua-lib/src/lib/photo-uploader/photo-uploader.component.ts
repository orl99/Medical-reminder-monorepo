import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Capacitor
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;


@Component({
  selector: 'orly-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {

  // public imageOn = false;
  @ViewChild('imagePrevuew') imagePreview: ElementRef;
  @ViewChild('apuaIconsContainer') apuaIconsContainer: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }


  public async takePicture(){
    const camara = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })
    const imageUrl = camara.webPath;
    // console.log('imagePreviewEle', imageUrl);
    this.apuaIconsContainer.nativeElement.style.display = 'none';
    this.imagePreview.nativeElement.style.display = 'block';
    this.imagePreview.nativeElement.src = imageUrl;
  }
}
