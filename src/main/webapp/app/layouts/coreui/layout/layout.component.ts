import { Component } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { Router, ActivatedRouteSnapshot, NavigationEnd, NavigationError } from '@angular/router';
import { navItems } from './_nav';

@Component({
  selector: 'jhi-app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private accountService: AccountService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  toggleMinimize(e: any): void {
    this.sidebarMinimized = e;
  }
}
