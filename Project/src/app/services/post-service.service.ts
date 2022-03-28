import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
url="https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/employee"
  constructor(private http:HttpClient) { }

  getposts(){
    return this.http.get(this.url);
  }
  
}
