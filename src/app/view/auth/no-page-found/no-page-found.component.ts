import { Component, inject } from '@angular/core';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-no-page-found',
  standalone: true,
  imports: [
    NzResultModule,
    NzButtonModule
  ],
  templateUrl: './no-page-found.component.html'
})
export default class NoPageFoundComponent {
  private _router = inject(Router)
  backHome() {
    this._router.navigateByUrl('/home')
  }
}
