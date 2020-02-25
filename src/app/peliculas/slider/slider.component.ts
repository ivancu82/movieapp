import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() public movies: any[];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  iraPeli(slug: string) {
    this.router.navigate(['detalles', slug])
  }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 3,
    "autoplay": true,
    "draggable": true,
    "autoplaySpeed": 6000,
    "arrows": false
  }

}
