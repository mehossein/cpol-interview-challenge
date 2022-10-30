// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { ContainerComponent } from './components/layout';
import { ProfileComponent } from './components/profile/profile.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'main-page', component: MainPageComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'main-page' },
    ],
  },
  { path: '**', redirectTo: 'main-page' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
