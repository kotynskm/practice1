import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  reactiveForm!: FormGroup;
  invalidProjectName = 'Test';
  // add validator that doesnt allow "Test" as a project name
  // implement an async validator

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      projectName: new FormControl('', [
        Validators.required,
        // this.isProjectNameInvalid.bind(this),
      ]),
      // email: new FormControl(
      //   '',
      //   [Validators.required, Validators.email],
      //   this.forbiddenEmail
      // ),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  // custom validator
  // isProjectNameInvalid(control: FormControl): { [s: string]: boolean } {
  //   if (this.invalidProjectName.indexOf(control.value !== -1)) {
  //     return { projectNameForbidden: true };
  //   }
  // }

  // async validator
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ emailInvalid: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
