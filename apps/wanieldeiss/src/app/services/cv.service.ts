import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cv } from '@dan/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Cv[]>('/assets/data/cv.json');
  }
}
