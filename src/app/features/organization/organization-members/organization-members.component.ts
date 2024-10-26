import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '../../../api/organization.service';
import { IMemberResponse, IOrganizationResponse } from '../../../shared/models/organization-response.model';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-organization-members',
  standalone: true,
  imports: [RouterModule, CommonModule, CardComponent],
  providers: [OrganizationService],
  templateUrl: './organization-members.component.html',
  styleUrl: './organization-members.component.scss',
})
export class OrganizationMembersComponent implements OnInit {
  members = signal<IMemberResponse[]>([]);
  totalmembers = signal<number>(0);
  loading = signal<boolean>(false);

  constructor(
    private orgService: OrganizationService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAllMembers();
  }

  loadAllMembers() {
    this.loading.set(true);
    const orgId = this.router.snapshot.paramMap.get('organizationId') as string;
    this.orgService.getOrganization(orgId).subscribe({
      next: (data: IOrganizationResponse) => {
        this.members.set(data.members);
        const total = data.members.length;
      this.totalmembers.set(total);
      },
      error: (err) => {
        console.log(err.message);
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
