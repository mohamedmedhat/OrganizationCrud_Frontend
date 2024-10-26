import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrganizationService } from '../../../api/organization.service';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  providers: [OrganizationService],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
})
export class OrganizationComponent {
  title = 'Add Organization'
  loading = signal<boolean>(false);
  createOrganizationForm: FormGroup;
  formTitle: string = '';

  constructor(
    private fb: FormBuilder,
    private orgservice: OrganizationService
  ) {
    this.createOrganizationForm = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.createOrganizationForm.valid) {
      this.createOrganizationForm.markAllAsTouched();
    }
    this.loading.set(true);
    this.orgservice.createOrganization(this.createOrganizationForm).subscribe({
      next: () => {
        console.log('created successfully');
      },
      error: (err) => {
        this.loading.set(false);
        console.log(err.message);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
