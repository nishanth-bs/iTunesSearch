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
import { SidebarItemComponent } from './components/homepage/sidebar/sidebar-item/sidebar-item.component';
import { CentercontentComponent } from './components/homepage/centercontent/centercontent.component';
import { CentreRowComponent } from './components/homepage/centercontent/centre-row/centre-row.component';
import { Top10Genre } from './services/top10genre.service';
import { InputsuggestionsComponent } from './components/homepage/header/inputsuggestions/inputsuggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
