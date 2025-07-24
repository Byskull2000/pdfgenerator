import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { withDebugTracing } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ejemploDatos } from 'src/utils/data';
import { imageLogo } from 'src/utils/imageLogo';
import { imageIndicator } from 'src/utils/imageIndicator';
import { imageAuto } from 'src/utils/imageAuto';

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
          // 1. Logo – glued to the left margin
          image: imageLogo,
          width: 100,
          absolutePosition: { x: 40, y: 40 },
        },

        {
          text: ejemploDatos.ubicacion,
          width: 300,
          alignment: 'center',
          margin: [0, 50, 0, 0],
          noWrap: false,
          lineHeight: 1.2,
        },

        {
          text: 'N°' + ejemploDatos.numeroOrden,
          fontSize: 15,
          bold: true,
          color: 'red',
          absolutePosition: { x: 480, y: 50 }, // 595 - 100
        },
        {
          text: 'ORDEN DE TRABAJO',
          alignment: 'center',
          fontSize: 18,
          bold: true,
          margin: [0, 10, 0, 10],
          margintop: 20,
        },
        {
          table: {
            widths: [
              'auto',
              'auto',
              'auto',
              'auto',
              'auto',
              'auto',
              'auto',
              'auto',
            ],
            body: [
              [
                { text: 'CLIENTE: ' + ejemploDatos.cliente, colSpan: 4 },
                {},
                {},
                {},
                { text: 'TELÉFONO: ' + ejemploDatos.telefono, colSpan: 4 },
                {},
                {},
                {},
              ],
              [
                { text: 'VEHÍCULO: ' + ejemploDatos.vehiculo, colSpan: 2 },
                {},
                { text: 'TIPO: ' + ejemploDatos.tipo, colSpan: 2 },
                {},
                { text: 'MODELO: ' + ejemploDatos.modelo, colSpan: 2 },
                {},
                { text: 'AÑO: ' + ejemploDatos.año, colSpan: 2 },
                {},
              ],
              [
                { text: 'PLACA: ' + ejemploDatos.placa, colSpan: 2 },
                {},
                { text: 'COLOR: ' + ejemploDatos.color, colSpan: 2 },
                {},
                { text: 'KM: ' + ejemploDatos.km, colSpan: 2 },
                {},
                { text: 'VIM: ' + ejemploDatos.vim, colSpan: 2 },
                {},
              ],
              [
                {
                  text: 'FECHA DE INGRESO: ' + ejemploDatos.fechaIngreso,
                  colSpan: 4,
                },
                {},
                {},
                {},
                {
                  text: 'FECHA SALIDA: ' + ejemploDatos.fechaSalida,
                  colSpan: 2,
                },
                {},
                { text: 'TÉCNICO: ' + ejemploDatos.tecnico, colSpan: 2 },
                {},
              ],
              [
                {
                  text: 'TRABAJOS A REALIZAR',
                  colSpan: 8,
                  alignment: 'center',
                  bold: true,
                  fontSize: 14,
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo1, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo2, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo3, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo4, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo5, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo6, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo7, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo8, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo9, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo10, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo11, colSpan: 8 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
            ],
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
          fontsize: 8,
        },
        {
          table: {
            widths: ['*'],
            body: [
              [
                {
                  type: 'none',
                  ul: [
                    {
                      text: 'INVENTARIO DE VEHICULO',
                      fontSize: 13,
                      bold: true,
                    },
                    {
                      columns: [
                        {
                          type: 'none',
                          ul: [
                            {
                              text: 'EXTERIORES',
                              alignment: 'center',
                              bold: true,
                            },
                            {
                              columns: [
                                '',
                                { text: 'SI', width: 15 },
                                { text: 'NO', width: 15 },
                              ],
                            },
                          ].concat(
                            (ejemploDatos.exteriores ?? []).map((exterior) => {
                              return {
                                columns: [
                                  exterior,
                                  { text: '__', width: 15 },
                                  { text: '__', width: 15 },
                                ],
                              };
                            })
                          ),
                        },
                        {
                          image: imageAuto,
                          width: 150,
                          alignment: 'center',
                          marginTop: 30,
                        },
                        {
                          type: 'none',
                          ul: [
                            {
                              text: 'INTERIORES',
                              alignment: 'center',
                              bold: true,
                            },
                            {
                              columns: [
                                '',
                                { text: 'SI', width: 15 },
                                { text: 'NO', width: 15 },
                              ],
                            },
                          ].concat(
                            (ejemploDatos.interiores ?? []).map((interior) => {
                              return {
                                columns: [
                                  interior,
                                  { text: '__', width: 15 },
                                  { text: '__', width: 15 },
                                ],
                              };
                            })
                          ),
                        },
                      ],

                      fontSize: 10,
                    },
                  ],
                },
              ],
            ],
          },
        },

        {
          table: {
            widths: ['*'],
            body: [
              [
                {
                  columns: [
                    {
                      image: imageIndicator,
                      width: 100,
                      alignment: 'center',
                      justify: 'center',
                    },
                    {
                      type: 'none',
                      ul: [
                        { text: 'ACCESORIOS', alignment: 'center', bold: true },
                        {
                          columns: [
                            '',
                            { text: 'SI', width: 15 },
                            { text: 'NO', width: 15 },
                          ],
                        },
                      ].concat(
                        (ejemploDatos.accesorios ?? []).map((accesorio) => {
                          return {
                            columns: [
                              accesorio,
                              { text: '__', width: 15 },
                              { text: '__', width: 15 },
                            ],
                          };
                        })
                      ),
                    },
                    {
                      type: 'none',
                      ul: [
                        {
                          text: 'COMPONENTES MECANICOS',
                          alignment: 'center',
                          bold: true,
                        },
                        {
                          columns: [
                            '',
                            { text: 'SI', width: 15 },
                            { text: 'NO', width: 15 },
                          ],
                        },
                      ].concat(
                        (ejemploDatos.accesorios ?? []).map((accesorio) => {
                          return {
                            columns: [
                              accesorio,
                              { text: '__', width: 15 },
                              { text: '__', width: 15 },
                            ],
                          };
                        })
                      ),
                    },
                  ],

                  fontSize: 10,
                },
              ],
            ],
          },
        },

        {
          table: {
            widths: ['*'],
            body: ejemploDatos.condiciones?.map((condicion) => [condicion]),
          },
        },
        {
          columns: [
            {
              width: '*',
              text: 'NOMBRE Y FIRMA RECEPCION',
              alignment: 'center',
            },
            {
              width: '*',

              text: 'NOMBRE Y FIRMA CLIENTE DEJA',
              alignment: 'center',
            },
            {
              width: '*',
              text: 'NOMBRE Y FIRMA CLIENTE RECOGE',
              alignment: 'center',
            },
          ],
          columnGap: 30,
          marginTop: 50,
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
