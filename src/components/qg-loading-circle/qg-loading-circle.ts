import { Component, Input } from '@angular/core';

@Component({
  selector: 'qg-loading-circle',
  templateUrl: 'qg-loading-circle.html',
})
export class QgLoadingCircleComponent {
  @Input()
  public value = '0.00';
  @Input()
  public label: string;

  constructor() {}
}
