import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentercontentComponent } from '../centercontent/centercontent.component';
import { ResultpageComponent } from '../resultpage/resultpage.component';

const routes: Routes = [
  {path: '',component:CentercontentComponent},
  {path:':category/:name', component:ResultpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }
