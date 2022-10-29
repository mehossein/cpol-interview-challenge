import { CoreModule } from './core/core.module';
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// Third-Party
import { ToastrModule } from 'ngx-toastr';

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
  bootstrap: [AppComponent],
})
export class AppModule {}
