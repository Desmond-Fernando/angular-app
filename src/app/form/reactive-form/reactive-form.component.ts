import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['sano', 'vino'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm.statusChanges.subscribe((value) => console.log(value));
    this.signupForm.setValue({
      'userData': {
        'username': 'Vinod',
        'email': 'vinod@gmail.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Desmond',
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
    // this.signupForm.reset({
    //   'gender': 'male'
    // });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
