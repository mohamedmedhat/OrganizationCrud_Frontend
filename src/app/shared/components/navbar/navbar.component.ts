import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../api/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  itemsList = [
    { id: 1, name: 'organization', link: '/organization/list' },
    { id: 2, name: 'logout' },
  ];

  onItemClick(item: { name: string }) {
    if (item.name === 'logout') {
      this.logout();
    } else {
      console.log(`Clicked on ${item.name}`);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
