import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../api/auth.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  formTitle = 'SignUp';
  loading = signal<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private http: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(2), Validators.max(40)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      this.loading.set(false);
      this.registerForm.markAllAsTouched();
    }
    this.loading.set(true);
    this.http.register(this.registerForm).subscribe({
      next: (data) => {
        console.log(data.message);
      },
      error: (err) => {
        console.log(err.message);
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
