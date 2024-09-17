import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ActivationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Breadcrumb } from '../breadcrumb/breadcrumb.interface';
import { Subscription, filter, map } from 'rxjs';
import { Menu } from './model/menu.interface';
import { SideBarService } from './service/side-bar.service';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { slideInOutAnimation } from '../../common/animations/slide-in-out.animation';
import { AuthService } from '../../auth/service/auth.service';
import { fadeInUp400ms } from '../../common/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../common/animations/scale-in.animation';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    NzIconModule,
    NzToolTipModule,
    NzMenuModule,
    BreadcrumbComponent,
    RouterModule,
    MenuNavigationComponent
  ],
  animations: [
    slideInOutAnimation(300),
    fadeInUp400ms,
    scaleIn400ms
  ],
  templateUrl: './side-bar.component.html',
  styles: `
  .notification-tab>.active {
  @apply text-blue-500 border-b-blue-500 hover:text-blue-500;
}

.order-tab>.active {
  @apply bg-blue-500 text-white hover:text-white;
}

.main.active {
  @apply md:w-full md:ml-0;
}

  `
})
export default class SideBarComponent implements OnInit {
  public tituloSubs$!: Subscription;
  private _sideBarService = inject(SideBarService)
  public data: Breadcrumb[] = []
  public isSidebarOpen: boolean = false;
  public currentSidebarTab: string = '';
  public menu: Menu[] = []
  private _authService = inject(AuthService);
  constructor(private router: Router,
    private elementRef: ElementRef
  ) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe((data: any) => {
      this.data = Object.values(data)
    }
    );
  }

  ngOnInit(): void {
    this._sideBarService.getAccesos()
      .subscribe((res) => {
        this.menu = res.data!;
      })
  }

  get getModulos(): Menu[] {
    return this.menu.filter(x => x.idPadre == 0 || x.idPadre == null);
  }

  getCurrentModule(): Menu {
    return this.menu.filter(x => x.nombre == this.currentSidebarTab)[0]
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
  moduleClick(selectCurrentSidebarTab: string) {
    if (this.isSidebarOpen && this.currentSidebarTab == selectCurrentSidebarTab)
      this.isSidebarOpen = false
    else {
      this.isSidebarOpen = false
      setTimeout(() => {
        (this.isSidebarOpen && this.currentSidebarTab == selectCurrentSidebarTab) ? this.isSidebarOpen = false : this.isSidebarOpen = true;
        this.currentSidebarTab = selectCurrentSidebarTab;
        this.isOpen = false;
      }, 300);
    }
  }



  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getActivateModule(selectCurrentSidebarTab: string): string {
    return (this.currentSidebarTab == selectCurrentSidebarTab) ? 'text-white bg-primary' : 'text-gray-500 bg-white';

  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        const userMenu = document.getElementById('userMenu');
        if (userMenu) {
          userMenu.focus();
        }
      }, 0);
    }
  }

  closeMenu() {
    this.isOpen = false;
  }

  closeNavBar(close: boolean) {
    this.isSidebarOpen = close;
    this.isOpen = close
  }

  Logout() {
    this._authService.logout();
    this.router.navigateByUrl('/login');
  }
}

