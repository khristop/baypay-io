import { Component, OnInit, Input } from '@angular/core';
import { BaseButton } from '../interfaces/base-button.interface';

@Component({
  selector: 'bay-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonConfig: BaseButton = {};

  @Input() defaultClass = 'black';

  onBtnClick() {}
}
