import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  RegForm!: FormGroup;
  constructor(private form: FormBuilder) {
  }
  ngOnInit(): void {
    this.RegForm = this.form.group({
      fname: "",
      lname: "",
      uname: "",
      mobile: "",
      email: "",
      password: "",
      cpassword: "",
      checkbox: "",
    })
  }
  Registration() {
    console.log(this.RegForm.value,"successfull")
  }

}

