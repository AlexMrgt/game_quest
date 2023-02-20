import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { QuestionWebComponent } from './question/question.web.component';

const accountRotes: Routes = [

    {
        path: '',
        component:  QuestionWebComponent,
    }
    ,
    {
      path: ':id',
      component:  QuestionWebComponent,
  }
];

@NgModule({
    imports: [RouterModule.forChild(accountRotes)],
    exports: [RouterModule]
})
export class QuestionRoutingWebModule {

}
