import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = (pdfFonts as any).vfs;

@Component({
  selector: 'pdf-maker',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent {
  generatePDF() {
    const docDefinition = {
      content: [
        {
          table: {
            widths: ['auto', '*', 'auto', '*'],
            body: [
              // Fila 1: 2 columnas (CLIENTE / TELEFONO)
              [
                { text: 'CLIENTE:', colSpan: 2 },
                '',
                { text: 'TELÉFONO:', colSpan: 2 },
                '',
              ],
              // Fila 2: 4 columnas (VEHICULO / TIPO / MODELO / AÑO)
              ['VEHÍCULO:', '', 'TIPO:', ''],
              ['MODELO:', '', 'AÑO:', ''],
              // Fila 3: 4 columnas (PLACA / COLOR / KM / VIM)
              ['PLACA:', '', 'COLOR:', ''],
              ['KM:', '', 'VIM:', ''],
              // Fila 4: 3 columnas (FECHA DE INGRESO / FECHA SALIDA / TECNICO)
              [
                { text: 'FECHA DE INGRESO:', colSpan: 2 },
                '',
                'FECHA SALIDA:',
                'TÉCNICO:',
              ],
            ],
          },
          layout: 'headerLineOnly',
        },
        { text: '\n' },
        {
          text: 'TRABAJOS A REALIZAR',
          alignment: 'center',
          bold: true,
          fontSize: 14,
          margin: [0, 10, 0, 10],
        },
        {
          table: {
            widths: ['*'],
            body: Array(13).fill(['\n\n\n']),
          },
          layout: 'lightHorizontalLines',
        },
        { text: 'INVENTARIO DE VEHICULO:' },
        {
          columns: [
            { text: 'EXTERIORES', style: 'categorias' },
            {
              text: 'INTERIORES',
            },
          ],
        },
      ],
      styles: {
        categorias: {
          background: '#82807a',
          color: '#fff',
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
