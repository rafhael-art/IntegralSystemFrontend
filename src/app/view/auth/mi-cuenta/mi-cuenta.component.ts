import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { SideBarService } from '../../layout/side-bar/service/side-bar.service';
import { lastValueFrom } from 'rxjs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [
    NzFormModule,
    NzCardModule,
    NzFlexModule,
    NzIconModule,
    NzTreeModule,
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule
  ],
  templateUrl: './mi-cuenta.component.html'
})
export default class MiCuentaComponent implements OnInit {
  private _sideService = inject(SideBarService);
  private _authService = inject(AuthService);
  private _fb = inject(FormBuilder);
  public user: any;
  nodes: NzTreeNodeOptions[] = [];
  form!: FormGroup;

  constructor() {
    this.initForm()
  }

  initForm(): void {
    this.form = new FormGroup({
      codigo: new FormControl({ value: '', disabled: true }, Validators.required),
      nombreUsuario: new FormControl({ value: '', disabled: true }, Validators.required),
      descripcionPuntoVenta: new FormControl({ value: '', disabled: true }, Validators.required),
      activo: new FormControl({ value: true, disabled: true }, Validators.required),
    })
  }

  async ngOnInit() {
    var val = this._sideService.getAccesos();
    const menu = (await lastValueFrom(val)).data;
    this.nodes = this.organizarElementos(menu!, null);
    this.user = this._authService.CurrentUser;
    this.form.patchValue(this.user)
  }


  organizarElementos(data: any[], idPadre: number | null): NzTreeNodeOptions[] {
    const hijos = data.filter(item => item.idPadre === idPadre);
    return hijos.map(hijo => {
      const tieneHijos = data.some(item => item.idPadre === hijo.id);
      const nodo: NzTreeNodeOptions = {
        title: hijo.nombre,
        key: hijo.id.toString(),
        icon: hijo.icono,
        expanded: true,
        children: tieneHijos ? this.organizarElementos(data, hijo.id) : [],
        isLeaf: !tieneHijos // Establece isLeaf en true si no tiene hijos
      };
      return nodo;
    });
  }



}
