import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EmployeeSharedModule } from 'app/shared/shared.module';
import { EmployeeCoreModule } from 'app/core/core.module';
import { EmployeeAppRoutingModule } from './app-routing.module';
import { EmployeeHomeModule } from './home/home.module';
import { EmployeeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { CoreUiModule } from './layouts/coreui/coreui.module';

@NgModule({
  imports: [
    BrowserModule,
    EmployeeSharedModule,
    EmployeeCoreModule,
    EmployeeHomeModule,
    CoreUiModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EmployeeEntityModule,
    EmployeeAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class EmployeeAppModule {}
