import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { token } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=';

  callArticleEndpoint(): Observable<any> {
    return this.http.get(this.url + token);
  }
}
