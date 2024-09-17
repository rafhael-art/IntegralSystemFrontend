import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule
  ],
  templateUrl: './login.component.html'
})
export default class LoginComponent {

  form!: FormGroup

  constructor(
    private fb: FormBuilder
    , private authService: AuthService
    , private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      anioEjercico: [2024]
    });
  }
  login(): void {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((controls) => {
        controls.markAllAsTouched()
      })
    }

    this.authService.login(this.form.value).subscribe((resp) => {
      if (resp.isSucces) {
        const anioEjercico = this.form.get('anioEjercico')?.value;
        localStorage.setItem('anioEjercico', anioEjercico);
        this.router.navigate(["/home"])
      }
    })
  }

}
