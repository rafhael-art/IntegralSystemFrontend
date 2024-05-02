import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-auto-filters-with-button',
  standalone: true,
  imports: [
    NzFlexModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './auto-filters-with-button.component.html'
})
export class AutoFiltersWithButtonComponent {

}
