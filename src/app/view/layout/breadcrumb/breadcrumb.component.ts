import { Component, Input, inject } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Breadcrumb } from './breadcrumb.interface';
import { RouterModule } from '@angular/router';
import { fadeInRight400ms } from '../../common/animations/fade-in-right.animation';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    NzBreadCrumbModule,
    NzIconModule,
    NzDividerModule,
    RouterModule,
  ],
  animations: [
    fadeInRight400ms
  ],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  @Input() navigation: Breadcrumb[] = []
  _auth = inject(AuthService)
  constructor() {
  }

  get Anio() {
    return this._auth.anioEjercicio
  }

  get User() {
    return this._auth.CurrentUser
  }
}
