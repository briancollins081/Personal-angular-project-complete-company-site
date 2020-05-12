import {
  Component, 
  OnInit, 
  AfterViewInit, 
  // ViewChild, 
  // ElementRef
} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  // @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  // map: google.maps.Map;
  // lat = -1.253833;
  // lng = 36.797613;
  // coordinates = new google.maps.LatLng(this.lat, this.lng);
  // mapOptions: google.maps.MapOptions = {
  //   center: this.coordinates,
  //   zoom: 10,
  // };
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.mapInitializer();
  }

  // mapInitializer() {
  //   this.map = new google.maps.Map(this.gmap.nativeElement, 
  //   this.mapOptions);
  //   this.marker.setMap(this.map);
  //  }
}
