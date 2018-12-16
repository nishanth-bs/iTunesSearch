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
import { ResultpageComponent } from './resultpage/resultpage.component';
import { ProcessString } from 'src/app/shared/processString';
import { MainContentModule } from './main-content/main-content.module';
import { InputSuggestionsItemComponent } from './header/inputsuggestions/input-suggestions-item/input-suggestions-item.component';
import { ResultpagerowComponent } from './resultpage/resultpagerow/resultpagerow.component';

@NgModule({
  declarations: [
       HomepageComponent,
       HeaderComponent,
      InputsuggestionsComponent,
    InputSuggestionsItemComponent,
    ResultpagerowComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MainContentModule
  ],
  exports:[  ],
  providers:[QueryServer,
    Top10Genre]
})
export class HomepageModule { }
