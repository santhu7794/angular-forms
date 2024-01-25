import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 loginform!:FormGroup;
 constructor( private form:FormBuilder){

 }
 ngOnInit(): void {
   this.loginform=this.form.group({
    uname:"",
    password:"",
   })
 }
 login(){
  console.log(this.loginform.value,"login")
 }
}
