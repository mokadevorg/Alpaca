import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output('onSubmit')
  submitEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  submitted = false;

  categories: String[] = ['Games', 'Movies', 'Study', 'Engineering'];

  constructor() {
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
      this.submitEvent.emit(form.value);
    } else {
      this.submitted = false;
    }
  }
}
