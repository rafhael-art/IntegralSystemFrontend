import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router, RouterOutlet, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Subscription, filter, map } from 'rxjs';
import { Breadcrumb } from './breadcrumb/breadcrumb.interface';
import SideBarComponent from './side-bar/side-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NzIconModule,
    NzToolTipModule,
    NzMenuModule,
    BreadcrumbComponent,
    RouterModule,
    SideBarComponent
  ],
  templateUrl: './layout.component.html',
  styles: [
    `
      [nz-menu] {
        width: 238px;
      };
      [nz-menu]{
        color: 'red'
      };
      .active {
  background-color: #f0f0f0;
  color: #333;
};
    `
  ]
})
export default class LayoutComponent implements OnDestroy, OnInit {

  public tituloSubs$!: Subscription;
  public data: Breadcrumb[] = []
  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe((data: any) => {
      this.data = Object.values(data)
    }
    );
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
