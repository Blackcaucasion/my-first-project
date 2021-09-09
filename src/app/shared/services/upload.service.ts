import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basePath = '/profiles';
 
  
  constructor(private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: File): Observable<any> {
    const filePath = `${this.basePath}/${fileUpload}`;
    const uploadTask = this.storage.upload(filePath, fileUpload);


    return uploadTask.snapshotChanges();
  }
}
