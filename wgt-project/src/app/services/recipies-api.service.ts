import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipie } from '../shared/recipie';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipiesApiService {
  //hostAddress = `${environment.hostAddress}`;
  constructor(private apiService: ApiService<Recipie>) {}

  getAllRecipies(): Observable<Recipie[]> {
    return this.apiService.getAll(`Recipie/all`);
  }
}
