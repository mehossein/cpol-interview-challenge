// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// App
import {
  ContainerComponent,
  SidebarComponent,
  HeaderComponent,
} from './components';
import { DashboardApi } from './Api';
import { ProfileComponent } from './components/profile/profile.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DashboardRoutingModule } from './dashboard.routing';

// Third-Party
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    //App
    ContainerComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    MainPageComponent,
  ],
  imports: [
    // Angular
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    // App
    DashboardRoutingModule,

    // Third-Party
    MatIconModule,
  ],
  providers: [DashboardApi],
})
export class DashboardModule {}
