import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  form: FormGroup;
  categories: String[] = ['Games', 'Movies', 'Study', 'Engineering'];
  submitted = false;

  constructor(private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(8)]),
      description: new FormControl('', [<any>Validators.required]),
      category: new FormControl('', [<any>Validators.required]),
    })
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    if (form.valid) {
      let name = form.value.name;
      let description = form.value.description;
      let category = form.value.category;

      this.projectService.create(name, description, category)
        .then(project => this.router.navigate(['/projects', project.id]))
        .catch(reject => alert(reject));
    } else {
      this.submitted = false;
    }
  }
}
