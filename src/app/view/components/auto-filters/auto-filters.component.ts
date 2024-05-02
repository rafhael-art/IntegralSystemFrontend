import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-auto-filters',
  standalone: true,
  imports: [
    NzFlexModule,
    NzInputModule,
    NzFormModule
  ],
  templateUrl: './auto-filters.component.html',
  styles: `
  .segment-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;

        margin-block-end: 1rem;
      }
  `
})
export class AutoFiltersComponent {

}
