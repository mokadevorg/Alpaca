import { Component, OnInit } from '@angular/core';
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectService.get(params['id']))
      .subscribe(project => this.project = project);
  }

  remove(id: string) {
    this.projectService.remove(id)
      .then(response => {
        if (response.ok) {
          this.router.navigate(['/projects']);
        }
      })
      .catch(reject => alert(reject.toString()));
  }
}
