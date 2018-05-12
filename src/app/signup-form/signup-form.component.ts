import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  // @ViewChild('form') form: NgForm;
  signupForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl("", [Validators.required, this.passwordLengthValidator.bind(this)]),
      confirmpassword: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      hobbies: new FormArray([])
    });
  }

  onSubmit(){
    // console.log(this.form.value);
    console.log(this.signupForm);

  }

  onReset(){
    this.signupForm.reset();
  }

  passwordLengthValidator(control: FormControl):{[s: string]: boolean}{
    // console.log('inside custom validator ' + control.value);
    if(control.dirty && control.value.length < 5){
      return {'shouldBe5OrMore' : true};
    }
    return null;
  }

  onAddHobby(){
    console.log('add hoobby called');
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null));
  }

}
