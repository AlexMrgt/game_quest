import { Directive, Input } from "@angular/core";
import { ResModalViewModel } from "src/app/shared/view-models/res-modal.view-model";

@Directive()
export class ResModalBaseComponent {

  @Input()
  public model: ResModalViewModel;

  public handleRetutnBtnClick(): void{
    this.model.isShow = false;
  }

}
