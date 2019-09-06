import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserCardComponent } from './user-card/user-card.component';
import { LogClickDirective } from './log-click.directive';
//import { LogClickDirective } from './log-click.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    UserCardComponent,
    LogClickDirective,
    //LogClickDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
