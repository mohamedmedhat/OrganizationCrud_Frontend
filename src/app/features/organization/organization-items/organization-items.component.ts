import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Router, RouterModule } from '@angular/router';
import { OrganizationService } from '../../../api/organization.service';
import {
  IGetAllOrganizationsResponse,
  IOrganizationResponse,
} from '../../../shared/models/organization-response.model';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-organization-items',
  standalone: true,
  imports: [CardComponent, RouterModule, CommonModule, NgxSpinnerModule],
  providers: [OrganizationService],
  templateUrl: './organization-items.component.html',
  styleUrl: './organization-items.component.scss',
})
export class OrganizationItemsComponent implements OnInit {
  organizations = signal<IOrganizationResponse[]>([]);
  totalorganizations = signal<number>(0);
  page = signal<number>(0);
  size = signal<number>(9);
  loading = signal<boolean>(false);

  constructor(
    private orgService: OrganizationService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOrganizations();
  }

  loadOrganizations() {
    this.loading.set(true);
    this.showSpinner()
    this.orgService.getAllOrganizations(this.page(), this.size()).subscribe({
      next: (data: IGetAllOrganizationsResponse) => {
        this.organizations.set(data.organizations);
        this.totalorganizations.set(data.total_organizations);
      },
      error: (err) => {
        console.log(err.message);
        this.loading.set(false);
        this.hideSpinner()
      },
      complete: () => {
        this.loading.set(false);
        this.hideSpinner()
      },
    });
  }

  handleClick(organizationId: string) {
    this.router.navigate(['/organization/members', organizationId]);
  }

  showSpinner() {
    this.spinner.show(undefined, {
      type: 'ball-scale-multiple',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.3)',
      color: '#fff',
      template:
      "<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />",
    });
  }

  hideSpinner() {
    this.spinner.hide();
  }
}
