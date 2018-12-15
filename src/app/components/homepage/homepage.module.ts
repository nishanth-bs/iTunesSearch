import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentercontentComponent } from './centercontent/centercontent.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QueryServer } from 'src/app/services/queryServer.service';
import { Top10Genre } from 'src/app/services/top10genre.service';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { CentreRowComponent } from './centercontent/centre-row/centre-row.component';
import { HomepageComponent } from './homepage.component';
import { InputsuggestionsComponent } from './header/inputsuggestions/inputsuggestions.component';
import { CardComponent } from './card/card.component';
import { SearchitemcardComponent } from './searchitemcard/searchitemcard.component';

@NgModule({
  declarations: [
      CentercontentComponent,
      HeaderComponent,
      HomepageComponent,
      SidebarItemComponent,
      CentreRowComponent,
      CardComponent,
      InputsuggestionsComponent,
      SearchitemcardComponent,
      SidebarComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports:[
    CentercontentComponent,
      HeaderComponent,
      HomepageComponent,
      SidebarItemComponent,
      CentreRowComponent,
      CardComponent,
      InputsuggestionsComponent,
      SearchitemcardComponent,
      SidebarComponent
  ],
  providers:[QueryServer,
    Top10Genre]
})
export class HomepageModule { }
