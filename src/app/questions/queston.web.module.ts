import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SvgIconComponent } from "./icon/icon.component";
import { QuestionRoutingWebModule } from "./question-roting.web.module";
import { QuestionWebComponent } from "./question/question.web.component";
import { HttpClientModule } from '@angular/common/http';
import { ResModalWebComponent } from "./components/result-modal/res-modal.web.component";


@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingWebModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ResModalWebComponent,
    QuestionWebComponent,
    SvgIconComponent
  ],
  providers: [

  ]
})
export class QuestionsWebModule { }
