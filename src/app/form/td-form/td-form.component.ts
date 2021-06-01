import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = this.genders[0];
  formSubmitted = false;
  user = {
    username : '',
    email : '',
    secretQuestion : '',
    answer : '',
    gender : ''
  }

  constructor() { }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.signupForm);
    // console.log('Via viewChild');
    this.formSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

}
