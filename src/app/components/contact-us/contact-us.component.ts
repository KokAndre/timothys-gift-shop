import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactUsFormGroup: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.initializeControls();
  }

  private initializeControls() {
    this.contactUsFormGroup = this.fb.group({
      nameControl: new FormControl('', Validators.required),
      surnameControl: new FormControl('', Validators.required),
      phoneControl: new FormControl('', Validators.required),
      emailControl: new FormControl('', Validators.required),
      messageControl: new FormControl('', Validators.required)
    });
  }

  get nameControl() {
    return this.contactUsFormGroup.get('nameControl');
  }
  get surnameControl() {
    return this.contactUsFormGroup.get('surnameControl');
  }
  get phoneControl() {
    return this.contactUsFormGroup.get('phoneControl');
  }
  get emailControl() {
    return this.contactUsFormGroup.get('emailControl');
  }
  get messageControl() {
    return this.contactUsFormGroup.get('messageControl');
  }

}
