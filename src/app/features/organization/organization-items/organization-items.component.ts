import { Component, signal } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-organization-items',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './organization-items.component.html',
  styleUrl: './organization-items.component.scss'
})
export class OrganizationItemsComponent {
  constructor(
    private router: Router
  ){}

  handleClick(organizationId: string){
    this.router.navigate(['/organization/members', organizationId])
  }

}
