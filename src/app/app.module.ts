// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { BASE_URL } from '@shared/tokens';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { AlertService } from '@shared/services';
import { AppRoutingModule } from './app.routing';

// Third-Party
import { ToastrModule } from 'ngx-toastr';
import { environment } from '@env/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Third-Party
    ToastrModule.forRoot(),

    // App
    CoreModule,
  ],
  providers: [
    AlertService,
    { provide: BASE_URL, useValue: environment.baseUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
