import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(arquivos: File[]):Observable<any>{
    const formData = new FormData();

    for(let i = 0; i < arquivos.length; i++){
      const arquivo= arquivos[i];
      formData.append(arquivo.name,arquivo);
    }
    
    return this.http.post(environment.apiUrl + "upload", formData);
  }
}
