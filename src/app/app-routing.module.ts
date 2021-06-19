import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent} from './about/about.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import{TopbarComponent} from './topbar/topbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {GetbyComponent} from './getby/getby.component';

const routes: Routes = [
 
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"mainpage",
    component:MainpageComponent
  },
  {
    path:"topbar",
    component:TopbarComponent
  },
  {
    path:"welcome/:id",
    component:WelcomeComponent
  },
  {
    path:"getby/:id",
    component:GetbyComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
