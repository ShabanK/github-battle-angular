import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from "@angular/common/http"


@Injectable()
export class TopReposService {

  constructor(
    private http: HttpClient
  ) { }
  
  private languages: String[] = ["All", "Java", "Javascript", "Python", "Ruby"]
  // `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`

  fetchData(language:string):Observable<any>{
    return this.http.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  }
}
