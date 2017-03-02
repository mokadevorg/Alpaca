import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { RoutingModule } from "./routing";
import { ProjectService } from "./project.service";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ViewTitleComponent } from './view-title/view-title.component';
import { CategoryService } from "./category.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectFormComponent,
    ViewTitleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    ProjectService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
