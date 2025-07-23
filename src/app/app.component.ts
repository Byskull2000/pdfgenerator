import { Component, ViewChild  } from '@angular/core';
import { PdfComponent } from '../app/pdf/pdf.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PdfComponent)
  pdfMaker!: PdfComponent;
  generarPDF() {
    this.pdfMaker.generatePDF();
  } 
}
