import { Injectable } from '@angular/core';
import { Project } from "./project";
import { Http, Headers, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProjectService {
  url: string = 'http://10.195.250.157:8000/api/projects';
  headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) {
  }

  list(): Promise<Project[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  get(id: string): Promise<Project> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }

  create(name: string, description: string, category: string): Promise<Project> {
    return this.http
      .post(this.url, JSON.stringify({
        name: name,
        description: description,
        category: category,
      }), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Project)
      .catch(this.handleError);
  }

  update(project: Project): Promise<Project> {
    return this.http
      .put(`${this.url}/${project.id}`, JSON.stringify(project), {headers: this.headers})
      .toPromise()
      .then(project => project.json() as Project)
      .catch(this.handleError);
  }

  remove(id: string): Promise<Response> {
    return this.http
      .delete(`${this.url}/${id}`)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}
