import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './of/rxjs.component';
import { FromoperatorComponent } from './fromoperator/fromoperator.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    FromoperatorComponent,
    FromEventComponent,
    IntervalComponent,
    DebouncetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
