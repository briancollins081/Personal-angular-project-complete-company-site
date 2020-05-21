import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gov-covid',
  templateUrl: './gov-covid.component.html',
  styleUrls: ['./gov-covid.component.css']
})
export class GovCovidComponent implements OnInit {
  docURL:string = "/assets/documents/covidcertificate.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
