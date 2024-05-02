import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzDividerModule
  ],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

}
