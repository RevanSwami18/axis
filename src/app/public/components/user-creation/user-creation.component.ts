import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-user-creation',
  templateUrl:'./user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  loginForm: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.loginForm = new FormGroup({
      userName : new FormControl('', [
        Validators.required,
      ]),
     
      Password : new FormControl('', [
        Validators.required,
      ]),

    });
   }
  ngOnInit(): void {
  }

}
