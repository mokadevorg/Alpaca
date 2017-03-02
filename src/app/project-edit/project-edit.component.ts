import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent implements OnInit {
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

  onSubmit(value: any) {
    this.project.name = value.name;
    this.project.description = value.description;
    this.project.category = value.category;

    this.projectService.update(this.project)
      .then(project => this.router.navigate(['/project', project.id]));
  }
}
