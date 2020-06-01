import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class Display implements OnInit {
  docURL:string = "/assets/documents/covidcertificate.pdf";
  docTitle: string = "General Document";
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router 
    ) { }

  ngOnInit(): void {
    if(!this.docURL){
      this.router.navigate(['/documents'])
    }
    this.activatedRoute.queryParams.subscribe(params => {
      this.docURL = `/assets/documents/${params['doc']}.pdf`;
      this.docTitle = params['title'];
    })
  }

}
