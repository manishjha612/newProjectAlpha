import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client-model',
  templateUrl: './add-client-model.component.html',
  styleUrls: ['./add-client-model.component.scss']
})
export class AddClientModelComponent implements OnInit {

  registerForm: any = FormGroup;
  submitted = false;
  user: any;
  constructor(private formBuilder: FormBuilder, private ROUTER :Router) { }

  ngOnInit(): void {
   
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],  
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      Age: ['', Validators.compose([Validators.required])],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {

    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
   // console.log(this.registerForm.value);
    const userData = {
      firstName: this.registerForm.controls['firstName'].value,
      lastName: this.registerForm.controls['lastName'].value,
      email: this.registerForm.controls['email'].value,
      phone: this.registerForm.controls['phone'].value,
      Age: this.registerForm.controls['Age'].value,
    }
    this.addUser(userData);
    this.Starred(userData);
    this.ROUTER.navigate(['Client'])
  }
  addUser(user: any) {
    let userData = localStorage.getItem('Users');
    let users = [];
    if (userData) {
      users = JSON.parse(userData);
    }
    users?.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
  }

  Starred(user:any){
    let userData = localStorage.getItem('Starred');
    let users = [];
    if (userData) {
      users = JSON.parse(userData);
    }
    users?.push(user);
    localStorage.setItem('Starred', JSON.stringify(users));
    
  }
}
