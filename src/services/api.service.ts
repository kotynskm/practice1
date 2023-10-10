import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=';

  callArticleEndpoint(): Observable<any> {
    return this.http.get(this.url + environment.token);
  }
}
