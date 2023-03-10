import { Directive, Input, OnInit } from "@angular/core";
import { questions } from "src/app/shared/data/questions";
import { ActivatedRoute } from '@angular/router';
import { IQuestion } from "src/app/shared/interfaces/question.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { AnswerStatus, ResModalViewModel } from "src/app/shared/view-models/res-modal.view-model";


@Directive()
export class QuestionBaseComponent implements OnInit {

  public questionData: IQuestion;
  public form: FormGroup;
  public answerIsWrite: boolean = false;

  public modalModel:ResModalViewModel = new ResModalViewModel();

  public bgStyle = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(../../../assets/img/backgrounds/${Math.floor(Math.random() * 16)}.jpg) center/cover`;

  constructor(private ar: ActivatedRoute) {

  }

  public ngOnInit(): void {

    const currentQuestionId = this.ar.snapshot.paramMap.get('id') as string;
    const a = 5;

    if (!currentQuestionId) {
      return;
    }

    this.questionData = questions[parseInt(currentQuestionId)];

    if (!this.questionData) {
      return;
    }

    this.form = new FormGroup({
      "answer": new FormControl(),
    });


  }

  public handleBtnClick() {

    if (this.form.controls['answer'].value === this.questionData.questionAnswer) {
      this.modalModel.answerStatus = AnswerStatus.RIGHT
      this.modalModel.isShow = true;

      return;
    }

    this.modalModel.answerStatus = AnswerStatus.WRONG;
    this.modalModel.isShow = true;
    this.form.controls['answer'].setValue('');
  }

}
