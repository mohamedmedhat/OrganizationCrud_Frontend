import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Router, RouterModule } from '@angular/router';
import { OrganizationService } from '../../../api/organization.service';
import { IGetAllOrganizationsResponse, IOrganizationResponse } from '../../../shared/models/organization-response.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organization-items',
  standalone: true,
  imports: [CardComponent, RouterModule, CommonModule],
  providers: [OrganizationService],
  templateUrl: './organization-items.component.html',
  styleUrl: './organization-items.component.scss'
})
export class OrganizationItemsComponent implements OnInit {
  organizations = signal<IOrganizationResponse[]>([]);
  totalorganizations = signal<number>(0);
  page = signal<number>(0);
  size = signal<number>(9);
  loading = signal<boolean>(false);

  constructor(
    private orgService: OrganizationService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.loadOrganizations();
  }

  loadOrganizations(){
    this.loading.set(true);
    this.orgService.getAllOrganizations(this.page(), this.size()).subscribe({
      next:(data: IGetAllOrganizationsResponse) => {
        this.organizations.set(data.organizations);
        this.totalorganizations.set( data.total_organizations)
      },
      error:(err) => {
        console.log(err.message)
        this.loading.set(false);
      },
      complete:() => {
        this.loading.set(false);
      }
    })
  }

  handleClick(organizationId: string){
    this.router.navigate(['/organization/members', organizationId])
  }
}
