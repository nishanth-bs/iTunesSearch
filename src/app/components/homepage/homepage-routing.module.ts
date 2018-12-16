import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage.component';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { CentreRowComponent } from './centercontent/centre-row/centre-row.component';

const routes :Routes = [
    {path:'', component:HomepageComponent, loadChildren:'./main-content/main-content.module#MainContentModule'},//component:HomepageComponent, pathMatch:'full'},
    {path:'search',component:HomepageComponent, loadChildren:'./main-content/main-content.module#MainContentModule'}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomepageRoutingModule{}