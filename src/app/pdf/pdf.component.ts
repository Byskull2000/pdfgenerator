import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'pdf-maker',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  generatePDF() {
    const docDefinition = {
      content: [
        {
          table: {
            widths: ['auto', '*', 'auto', '*'],
            body: [
              ['CLIENTE:', '', 'TELÉFONO:', ''],
              ['VEHÍCULO:', '', 'TIPO:', '', 'MODELO:', '', 'AÑO:', ''],
              ['PLACA:', '', 'COLOR:', '', 'KM:', '', 'VIM:', ''],
              ['FECHA DE INGRESO:', '', 'FECHA SALIDA:', '', 'TÉCNICO:', '']
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n' },
        {
          text: 'TRABAJOS A REALIZAR',
          alignment: 'center',
          bold: true,
          fontSize: 14,
          margin: [0, 10, 0, 10]
        },
        {
          table: {
            widths: ['*'],
            body: Array(13).fill(['\n\n\n'])
          },
          layout: 'lightHorizontalLines'
        }
      ]
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
