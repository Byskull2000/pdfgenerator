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
          width: 90,
          absolutePosition: { x: 40, y: 40 },
        },

        {
          text: ejemploDatos.ubicacion,
          width: 300,
          alignment: 'center',
          margin: [0, 9, 0, 0],
          noWrap: false,
        },

        {
          text: 'N°' + ejemploDatos.numeroOrden,
          fontSize: 15,
          bold: true,
          color: 'red',
          absolutePosition: { x: 480, y: 50 }, // 595 - 90
        },
        {
          text: 'ORDEN DE TRABAJO',
          alignment: 'center',
          fontSize: 13,
          bold: true,
          margin: [0, 9, 0, 9],
          margintop: 9,
        },
        {
          table: {
            widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
            body: [
              [
                {
                  text: 'CLIENTE: ' + ejemploDatos.cliente,
                  colSpan: 4,
                  fontSize: 9,
                },
                {},
                {},
                {},
                {
                  text: 'TELÉFONO: ' + ejemploDatos.telefono,
                  colSpan: 4,
                  fontSize: 9,
                },
                {},
                {},
                {},
              ],
              [
                {
                  text: 'VEHÍCULO: ' + ejemploDatos.vehiculo,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
                {
                  text: 'TIPO: ' + ejemploDatos.tipo,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
                {
                  text: 'MODELO: ' + ejemploDatos.modelo,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
                { text: 'AÑO: ' + ejemploDatos.año, colSpan: 2, fontSize: 9 },
                {},
              ],
              [
                {
                  text: 'PLACA: ' + ejemploDatos.placa,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
                {
                  text: 'COLOR: ' + ejemploDatos.color,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
                { text: 'KM: ' + ejemploDatos.km, colSpan: 2, fontSize: 9 },
                {},
                { text: 'VIM: ' + ejemploDatos.vim, colSpan: 2, fontSize: 9 },
                {},
              ],
              [
                {
                  text: 'FECHA DE INGRESO: ' + ejemploDatos.fechaIngreso,
                  colSpan: 4,
                  fontSize: 9,
                },
                {},
                {},
                {},
                {
                  text: 'FECHA SALIDA: ' + ejemploDatos.fechaSalida,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
                {
                  text: 'TÉCNICO: ' + ejemploDatos.tecnico,
                  colSpan: 2,
                  fontSize: 9,
                },
                {},
              ],
              [
                {
                  text: 'TRABAJOS A REALIZAR',
                  colSpan: 8,
                  alignment: 'center',
                  bold: true,
                  fontSize: 13,
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
                { text: ejemploDatos.trabajo1, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo2, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo3, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo4, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo5, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo6, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo7, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo8, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo9, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo9, colSpan: 8, fontSize: 9 },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                { text: ejemploDatos.trabajo11, colSpan: 8, fontSize: 9 },
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

                      fontSize: 9,
                    },
                    {
                      text: 'OBSERVACIONES',
                      fontSize: 9,
                      bold: true,
                      marginLeft: 90,
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
                      width: 90,
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

                  fontSize: 9,
                },
              ],
            ],
          },
        },

        {
          table: {
            widths: ['*'],
            body: ejemploDatos.condiciones?.map((condicion) => [
              { text: condicion, fontSize: 9 },
            ]),
          },
        },
        {
          columns: [
            {
              width: '*',
              stack: [
                { text: '_________________________', alignment: 'center' },
                { text: 'NOMBRE Y FIRMA RECEPCION', alignment: 'center', fontSize: 9 },
              ]
            },
            {
              width: '*',
              stack: [
                { text: '_________________________', alignment: 'center' },
                { text: 'NOMBRE Y FIRMA CLIENTE DEJA', alignment: 'center', fontSize: 9 },
              ]
            },
            {
              width: '*',
              stack: [
                { text: '_________________________', alignment: 'center' },
                { text: 'NOMBRE Y FIRMA CLIENTE RECOGE', alignment: 'center', fontSize: 9 },
              ]
            },
          ],
          columnGap: 30,
          marginTop: 50,
        }

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
