import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'exchange',
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {
  path:'', redirectTo:'exchange', pathMatch:'full'
  },
  {path:'**', redirectTo:'exchange', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
