import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Bug } from '../model/bug';

@Injectable({
  providedIn: 'root',
})
export class BugService {
  url = 'http://localhost:5000/bugs';

  bugList: Observable<Bug[]> | undefined;

  constructor(private http: HttpClient) {}
  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.url);
  }

  createBug(data: any): Observable<Bug[]> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post<Bug[]>(this.url, data, { headers: httpHeaders });
  }
}
