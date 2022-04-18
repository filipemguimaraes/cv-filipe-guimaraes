import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Curriculum } from './curriculum-data';
import { BehaviorSubject, catchError, Observable, of, shareReplay, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private curriculumsUrl = 'api/curriculums';

  curriculums: Curriculum[] = [
    {
      id: 0,
      category: '',
      institution: '',
      title: '',
      period: '',
      description: ''
    }
  ];

  constructor(private http: HttpClient) {}

  getCurriculums(): Observable<Curriculum[]> {

    return this.http.get<Curriculum[]>(this.curriculumsUrl)
      .pipe(
        tap(data => this.curriculums = data),
      );
  }

  getCvById(id: number): Observable<Curriculum> {
    const url = `${this.curriculumsUrl}/${id}`;
    return this.http.get<Curriculum>(url)
      .pipe(
        tap(data => console.log('Data: ' + JSON.stringify(data))),
      );
  }

}
