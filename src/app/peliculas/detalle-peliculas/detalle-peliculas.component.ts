import { Component, OnInit } from '@angular/core';

//LE IMPORTO EL SERVICIO
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.component.html',
  styleUrls: ['./detalle-peliculas.component.css']
})

export class DetallePeliculasComponent implements OnInit {

  slug : string;
  movie : any = {};
  
  constructor(private activatedRoute: ActivatedRoute, private _movieService: BackendService, private _location: Location, private _router: Router) { 

    this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug'];

      this._movieService.getMovieId(this.slug).subscribe(datos => {
        this.movie = datos;
      })
    })

  } 

  ngOnInit() {
    
  }

  

  iraVideoPeli(ytb: string) {
    this._router.navigate(['player', ytb])
  }

  volverPelis() {
    this._location.back();
  }
  
}
