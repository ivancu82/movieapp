import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  };

  buscarPeli(search) {
    console.log(search.value.pelicula);
    this._router.navigate(['peliculasbuscadas', search.value.pelicula]);
  }


}
