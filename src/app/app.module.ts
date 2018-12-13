import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/homepage/header/header.component';
import { QueryServer } from './services/queryServer.service';
import { SidebarComponent } from './components/homepage/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomepageComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QueryServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
