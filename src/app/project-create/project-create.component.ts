import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Category } from "../category";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(8)]),
      description: new FormControl('', [<any>Validators.required]),
      category: new FormControl('', [<any>Validators.required]),
    });
  }

  onSubmit(value: any) {
    let name = value.name;
    let description = value.description;
    let category = value.category;

    this.projectService.create(name, description, category)
      .then(project => this.router.navigate(['/projects', project.id]))
      .catch(reject => alert(reject));
  }
}
