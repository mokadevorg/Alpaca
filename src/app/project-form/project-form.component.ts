import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Project } from "../project";
import { Category } from "../category";
import { CategoryService } from "../category.service";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent implements OnInit {
  @Input('project')
  project: Project;

  @Output('onSubmit')
  submitEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  submitted = false;

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.list()
      .then(categories => this.categories = categories);

    if (this.project == null) {
      this.project = {
        id: '',
        name: '',
        description: '',
        category: ''
      }
    }

    this.form = new FormGroup({
      name: new FormControl(this.project.name, [<any>Validators.required, <any>Validators.minLength(8)]),
      description: new FormControl(this.project.description, [<any>Validators.required]),
      category: new FormControl(this.project.category, [<any>Validators.required]),
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    if (form.valid) {
      this.submitEvent.emit(form.value);
    } else {
      this.submitted = false;
    }
  }
}
