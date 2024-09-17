import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { DownloadXslxService } from '../../common/services/download-xlslx.service';
import { ReportButton } from './report-button.interface';

@Component({
  selector: 'app-report-button',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    NzToolTipModule
  ],
  template: `
    <button (click)="execute(index)" [nzLoading]="component.IsLoading" [nzSize]="'small'" nz-button nzType="primary"  nz-tooltip
    nzTooltipTitle="{{component.ToolTip}}" nzTooltipPlacement="bottom" [nzTooltipColor]="'blue'">
    <span nz-icon nzType="{{component.Icon}}"></span>
  </button>
  `
})
export class ReportButtonComponent {
  @Input({ required: true }) component!: ReportButton;
  @Input() index!: number;
  @Output() click = new EventEmitter<number>()
  private _excelService = inject(DownloadXslxService);

  download(inputs: string) {
    this.component.IsLoading = true;
    this._excelService.executeDownload(this.component.ApiUrl + inputs)
      .subscribe((excelData: Blob) => {
        const fileName = this.component.FileName;
        const blobUrl = URL.createObjectURL(excelData);
        if (!inputs.toUpperCase().includes('PRINT')) {
          const downloadLink = document.createElement("a");
          downloadLink.href = blobUrl;
          downloadLink.download = fileName;
          downloadLink.target = '_blank';
          downloadLink.click();
          URL.revokeObjectURL(blobUrl);
        } else {
          // Abrir el PDF en una nueva ventana
          const newWindow = window.open(blobUrl, '_blank');

          // Esperar a que la nueva ventana se cargue y luego invocar la impresión
          if (newWindow) {
            newWindow.document.write('<iframe id="pdfFrame" style="width: 100%; height: 100%;" frameborder="0"></iframe>');

            // Obtener referencia al iframe
            const pdfFrame = newWindow.document.getElementById('pdfFrame') as HTMLIFrameElement;

            // Configurar la fuente del iframe al blob URL
            pdfFrame.src = blobUrl;

            // Esperar a que el iframe cargue completamente antes de llamar a print
            pdfFrame.onload = () => {
              URL.revokeObjectURL(blobUrl);  // Liberar el objeto URL después de usarlo
            };
          } else {
            // Manejo de errores si la ventana no pudo ser abierta (bloqueada por el navegador)
            console.error("No se pudo abrir la nueva ventana. Verifique si los pop-ups están bloqueados.");
          }
        }



        this.component.IsLoading = false;
      })
  }

  execute(index: number) {
    this.click.emit(index);
  }
}
