import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PipelineService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  post(data) {
    console.log(data);
    return this.http.post('http://localhost:57294/api/Pipeline', data, {
      headers: this.headers
    });
  }
}
