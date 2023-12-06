import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skillsForm: FormGroup;
  successMessage: string = null;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      programmingLanguages: this.fb.array([], Validators.required),
      experienceLevel: ['', Validators.required],
      projectDescription: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get programmingLanguages() {
    return this.skillsForm.get('programmingLanguages');
  }

  onSubmit() {
    if (this.skillsForm.valid) {
      const name = this.skillsForm.get('name').value;
      const experienceLevel = this.skillsForm.get('experienceLevel').value;

      this.successMessage = Congratulations ${name}! Your programming skills are impressive. Keep up the great work, ${experienceLevel}!;
    }
  }
}
