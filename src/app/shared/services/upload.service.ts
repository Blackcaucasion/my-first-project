import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basePath = '/profiles';
 
  
  constructor(private storage: AngularFireStorage) { }

public  async pushFileToStorage(fileUpload: File){
    const filePath = `${this.basePath}/${fileUpload}`;
    const uploadTask = this.storage.upload(filePath, fileUpload);


    return   from((await uploadTask).ref.getDownloadURL());
  }
}
