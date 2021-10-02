import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurnosModel } from '../models/turnos';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  
  constructor(
    private http: HttpClient
    ) { };
    getTurnos(): Observable < TurnosModel [] > {
      return this.http.get('http://localhost:3000/users')
      .pipe(
        map((response: any ) => response)
      )
    }
}

