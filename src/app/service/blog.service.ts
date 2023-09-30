import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string  = `${environment.HOST}/Blog`

  constructor(private http: HttpClient) { }


  findAll(){
    return this.http.get(this.url);
  }
}
