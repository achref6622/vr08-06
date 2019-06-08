import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ordre} from '../model/ordre';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Config} from '../utils/Config';
import {Operation} from '../model/operation';
import {Portefeuille} from '../model/portefeuille';
import {Achat} from '../model/achat';
import {Vente} from '../model/vente';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private url = Config.BASE_URL + '/operation';


  constructor(private  httpClient: HttpClient) { }
  public getAll(id: any): Observable<Operation[]> {
    let params = new HttpParams();
    params = params.set('id', id) ;
    return this.httpClient.get<Operation[]>(this.url , {params});

  }
/*
  public executer(achat: Achat , vente: Vente): Observable<any> {
    //return this.httpClient.put(this.url , achat; vente);
  }*/
}
