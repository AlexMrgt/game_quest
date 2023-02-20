export class ResModalViewModel {

  public isShow: boolean = false;
  public answerStatus: AnswerStatus;

  constructor(){

  }



}

export enum AnswerStatus {
  RIGHT = 'right',
  WRONG = 'wrong'
}
