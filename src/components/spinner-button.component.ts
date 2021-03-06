import { Component, Input } from '@angular/core';
import { ButtonOpts } from './button-options.interface';

@Component({
  selector: 'spinner-button',
  template: `
    <button mat-button 
      [color]="options.buttonColor"     
      [class.active]="options.active"
      [class.mat-raised-button]="options.raised"
      [disabled]="options.active">

        <span>{{ options.text }}</span>

        <mat-spinner class="spinner" 
          [diameter]="options.spinnerSize"
          [color]="options.spinnerColor" 
          [mode]="options.mode"
          [value]="options.value"
          *ngIf="options.active">
        </mat-spinner>

    </button>
  `,
  styles: [`
    button /deep/ .mat-button-wrapper {display:flex}
    button.active {cursor: not-allowed}
    .spinner {
      margin-top: 8px;
      margin-left: 5px;
    }
  `]
})
export class SpinnerButton {
  @Input() options: ButtonOpts;
}