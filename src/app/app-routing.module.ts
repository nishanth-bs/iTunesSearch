import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
//import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  //{path:'',component:WelcomeComponent,pathMatch:'full'},
  //{path:'home',component:HomepageComponent,
  //  children:[
    //  {path:'search', loadChildren:'./components/homepage/homepage.module#HomepageModule'}
    //]}
    {path:'',component:WelcomeComponent},
    {path: 'home' , loadChildren:'./components/homepage/homepage.module#HomepageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
