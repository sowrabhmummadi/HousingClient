import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Result} from './result';
import {ResultList} from './resultList';

@Injectable({
  providedIn: 'root'
})
export class HomeQDataProviderService {
  private results: Result[];


  constructor(private http: HttpClient) {

  }

  public getData() {
    return this.http.get<ResultList>('http://127.0.0.1:3000/');
  }

}
