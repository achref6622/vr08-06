import { Injectable } from '@angular/core';
import {Config} from '../utils/Config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ordre} from '../model/ordre';





@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private url = Config.BASE_URL + '/action';
  constructor(private  httpClient: HttpClient) {
  }

  /*public getAll(): Observable<any[]> {

  }*/

  public get(): Observable<any> {
    return this.httpClient.get<any>(this.url);

  }

  public getaction( nom: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('nom', nom) ;
    return this.httpClient.get<any>(this.url + '/bynom' , {params});

  }

  public getactionbyid( id: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<any>(this.url + '/byid' , {params});

  }

  public findlastbyaction( id: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.httpClient.get<any>(this.url + '/byaction', {params});
  }

  }
