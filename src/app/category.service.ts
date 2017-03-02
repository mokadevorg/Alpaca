import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Category } from "./category";

@Injectable()
export class CategoryService {
  url: string = 'http://10.195.250.157:8000/api/categories';
  headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) {}

  list(): Promise<Category[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(categories => categories.json() as Category[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}
