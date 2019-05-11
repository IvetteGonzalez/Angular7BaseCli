import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConsumeService {

  private _url: string = 'http://api.icndb.com/jokes/random';
  private _urlQuestion = 'http://localhost:3021/api/QuestionAnswer';
  constructor(private _http: HttpClient) { }

  getJoke():Observable<any> {
    return this._http
        .get(this._url, {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  getQuestionAnswer():Observable<any> {
    return this._http
        .get(this._url, {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }



  handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
