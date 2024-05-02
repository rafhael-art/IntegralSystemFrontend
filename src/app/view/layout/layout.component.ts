import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NzIconModule, NzToolTipModule, NzMenuModule],
  templateUrl: './layout.component.html',
  styles: [
    `
      [nz-menu] {
        width: 235px;
      };
      [nz-menu]{
        color: 'red'
      }
    `
  ]
})
export default class LayoutComponent {
  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
