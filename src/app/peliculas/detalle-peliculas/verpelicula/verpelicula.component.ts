import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

//LE IMPORTO EL SERVICIO
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../../backend.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-verpelicula',
  templateUrl: './verpelicula.component.html',
  styleUrls: ['./verpelicula.component.css']
})


export class VerpeliculaComponent implements OnInit {

  ytb : string;
  traillers : any = {};
  key : string;

  youtubeUrl = 'https://www.youtube.com/embed/';
  youtubeId : string;

  urlV : string;

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private _movieService: BackendService, private location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.ytb = params['ytb'];

      this._movieService.getVideoMovie(this.ytb).subscribe(datos => {
        this.traillers = datos;
        this.key = this.traillers.results[0].key;

        this.urlV = this.youtubeUrl + this.key;
        console.log(this.urlV);
      })
      
    })
    
  }
  
  ngOnInit() {
  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl + this.key);
  }

  volver() {
    this.location.back();
  }
}
