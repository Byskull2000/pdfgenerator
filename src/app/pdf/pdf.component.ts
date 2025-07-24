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
    interface DatosPDF {
      cliente: string;
      telefono: string;
      vehiculo: string;
      tipo: string;
      modelo: string;
      año: string;
      placa: string;
      color: string;
      km: string;
      vim: string;
      fechaIngreso: string;
      fechaSalida: string;
      tecnico: string;
      trabajo1?: string;
      trabajo2?: string;
      trabajo3?: string;
      trabajo4?: string;
      trabajo5?: string;
      trabajo6?: string;
      trabajo7?: string;
      trabajo8?: string;
      trabajo9?: string;
      trabajo10?: string;
      trabajo11?: string;
    }

    // Ejemplo de datos
    const ejemploDatos: DatosPDF = {
      cliente: 'Juan Pérez',
      telefono: '555-1234',
      vehiculo: 'Toyota',
      tipo: 'Sedán',
      modelo: 'Corolla',
      año: '2020',
      placa: 'ABC-123',
      color: 'Rojo',
      km: '15000',
      vim: '1HGCM82633A004352',
      fechaIngreso: '23/07/2025',
      fechaSalida: '24/07/2025',
      tecnico: 'Luis Gómez',
      trabajo1: 'Cambio de aceite',
      trabajo2: 'Revisión de frenos',
      trabajo3: 'Alineación de dirección',
      trabajo4: 'Cambio de filtro de aire',
      trabajo5: 'Revisión de luces',
      trabajo6: 'Revisión de batería',
      trabajo7: 'Revisión de suspensión',
      trabajo8: 'Revisión de sistema de escape',
      trabajo9: 'Revisión de sistema de refrigeración',
      trabajo10: 'Revisión de sistema eléctrico',
      trabajo11: 'Inspección general',
    };
    
    const docDefinition = {
      content: [
        {
          table: {
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              [
                { text: 'CLIENTE: ' + ejemploDatos.cliente, colSpan: 4 }, {}, {}, {},
                { text: 'TELÉFONO: ' + ejemploDatos.telefono, colSpan: 4 }, {}, {}, {}
              ],
              [
                { text: 'VEHÍCULO: ' + ejemploDatos.vehiculo, colSpan: 2 }, {},
                { text: 'TIPO: ' + ejemploDatos.tipo, colSpan: 2 }, {},
                { text: 'MODELO: ' + ejemploDatos.modelo, colSpan: 2 }, {},
                { text: 'AÑO: ' + ejemploDatos.año, colSpan: 2 }, {}
              ],
              [
                { text: 'PLACA: ' + ejemploDatos.placa, colSpan: 2 }, {},
                { text: 'COLOR: ' + ejemploDatos.color, colSpan: 2 }, {},
                { text: 'KM: ' + ejemploDatos.km, colSpan: 2 }, {},
                { text: 'VIM: ' + ejemploDatos.vim, colSpan: 2 }, {}
              ],
              [
                { text: 'FECHA DE INGRESO: ' + ejemploDatos.fechaIngreso, colSpan: 4 }, {}, {}, {},
                { text: 'FECHA SALIDA: ' + ejemploDatos.fechaSalida, colSpan: 2 }, {},
                { text: 'TÉCNICO: ' + ejemploDatos.tecnico, colSpan: 2 }, {}
              ],
              [{ text: 'TRABAJOS A REALIZAR', colSpan: 8, alignment: 'center', bold: true, fontSize: 14 }, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo1, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo2, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo3, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo4, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo5, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo6, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo7, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo8, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo9, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo10, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
              [{ text: ejemploDatos.trabajo11, colSpan: 8}, {}, {}, {}, {}, {}, {}, {}],
            ]
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => '#000',
            vLineColor: () => '#000',
            paddingTop: () => 4,
            paddingBottom: () => 4,
            paddingLeft: () => 6,
            paddingRight: () => 6,
          },
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
