import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Curriculum } from './curriculum-data';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private curriculumsUrl = 'api/curriculum';

  constructor(private http: HttpClient) {}

  getCurriculums(): Observable<Curriculum[]> {

    return this.http.get<Curriculum[]>(this.curriculumsUrl)
      .pipe(
        tap(data => console.log('All Products', JSON.stringify(data))),
      );
  }



}
