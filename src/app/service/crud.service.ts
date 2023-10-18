import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable}  from 'rxjs';
import { Empleado } from './empleado';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  api: string=''

  constructor() { 

  }
}
