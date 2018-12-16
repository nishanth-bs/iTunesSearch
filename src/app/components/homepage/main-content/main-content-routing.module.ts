import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentercontentComponent } from '../centercontent/centercontent.component';
import { ResultpageComponent } from '../resultpage/resultpage.component';
import { AllResultPageComponent } from './all-result-page/all-result-page.component';

const routes: Routes = [
  {path: '',component:CentercontentComponent},
  {path:':category/:name', component:ResultpageComponent, children:[
    {path:':type/:all', component:AllResultPageComponent}
/*{path: 'song/:all',component:AllResultPageComponent,outlet:'song'},
    {path: 'artist/:all',component:AllResultPageComponent,outlet:'artist'},
    {path: 'album/:all',component:AllResultPageComponent,outlet:'album'},
    {path: 'composer/:all',component:AllResultPageComponent,outlet:'composer'}*/
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }
