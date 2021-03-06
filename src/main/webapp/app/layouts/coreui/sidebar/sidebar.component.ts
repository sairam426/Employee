import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { SessionStorageService } from 'ngx-webstorage';

import { VERSION } from 'app/app.constants';
import { LANGUAGES } from 'app/core/language/language.constants';
import { AccountService } from 'app/core/auth/account.service';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { LoginService } from 'app/core/login/login.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { INavData } from '@coreui/angular';
@Component({
  selector: 'jhi-app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  inProduction?: boolean;
  isNavbarCollapsed = true;
  languages = LANGUAGES;
  swaggerEnabled?: boolean;
  version: string;
  public sidebarMinimized = false;

  @Input() navItems: INavData[] = [];

  @HostBinding('class.sidebar-nav') sidebarNavClass = true;
  @HostBinding('attr.role') @Input() role = 'nav';

  public navItemsArray: INavData[] = [];

  constructor(
    private loginService: LoginService,
    private languageService: JhiLanguageService,
    private sessionStorage: SessionStorageService,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.version = VERSION ? (VERSION.toLowerCase().startsWith('v') ? VERSION : 'v' + VERSION) : '';
  }

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  toggleMinimize(e: any): void {
    this.sidebarMinimized = e;
  }

  isDivider(navItem: any): boolean {
    return !!navItem.divider;
  }

  isTitle(navItem: any): boolean {
    return !!navItem.title;
  }

  isHasChild(navItem: any): boolean {
    //console.log(Object.prototype.hasOwnProperty.call(navItem, "children"));
    return Object.prototype.hasOwnProperty.call(navItem, 'children') && navItem.children.length > 0;
  }
}
