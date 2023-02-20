import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'question',
    pathMatch: 'full'
  },
  {
    path: 'question',
    loadChildren: () => import('./questions/queston.web.module').then(m => m.QuestionsWebModule),

  },
  // {
  //   path: "*",
  //   component:
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingWebModule { }
