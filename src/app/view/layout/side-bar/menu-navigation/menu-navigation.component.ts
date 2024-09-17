import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { Menu } from '../model/menu.interface';
import { slideInOutAnimation } from '../../../common/animations/slide-in-out.animation';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-navigation',
  standalone: true,
  imports: [
    NzIconModule,
    RouterModule
  ],

  templateUrl: './menu-navigation.component.html'
})
export class MenuNavigationComponent implements AfterViewInit {


  @Input() menu: Menu[] = []
  @Input() currentModule!: Menu
  @Output() close: EventEmitter<boolean> = new EventEmitter()
  private router = inject(Router);
  ngAfterViewInit(): void {
    this.addEfectSideBar();
    this.VerificarRutaPadreActiva();

  }


  VerificarRutaPadreActiva() {
    const curretActiveRoute = this.menu.filter(x => x.url == this.router.url)
    if (curretActiveRoute.length == 0) return;
    if (this.getModulos.filter(x => curretActiveRoute[0].idPadre == x.id).length > 0) return;
    const routePadre = this.menu.filter(x => x.id == curretActiveRoute[0].idPadre);
    // Obtener el enlace por su id
    const enlace = document.getElementById(routePadre[0].nombre);

    // Verificar si se encontró el enlace
    if (enlace) {
      // Agregar un listener para el evento click
      enlace.click();
    }
  }

  get getModulos(): Menu[] {
    return this.menu.filter(x => x.idPadre == 0 || x.idPadre == null);
  }


  getOpciones(id: number): Menu[] {
    const d = this.menu.filter(x => x.idPadre == id);

    return d;
  }

  closing() {
    this.close.emit(false)
  }

  addEfectSideBar() {

    const dropdownToggles = document.querySelectorAll<HTMLElement>('.sidebar-dropdown-toggle');

    dropdownToggles.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = item.closest('.group') as HTMLElement;
        if (parent.classList.contains('selected')) {
          parent.classList.remove('selected');
        } else {
          dropdownToggles.forEach(function (i) {
            const group = i.closest('.group') as HTMLElement | null;
            if (group) {
              group.classList.remove('selected');
            }
          });
          parent.classList.add('selected');
        }
      });
    });

  }
}
