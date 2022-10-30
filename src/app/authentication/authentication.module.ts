// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// App
import { AuthApi } from '@app/authentication/Api';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { ContainerComponent } from './components/container/container.component';

// Third-Party
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginComponent, ContainerComponent],
  imports: [
    // Angular
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    // App
    AuthenticationRoutingModule,
  ],
  providers: [AuthApi],
})
export class AuthenticationModule {}
