import { Component, OnInit } from '@angular/core';

//LE IMPORTO EL SERVICIO
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas', 
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit {

  movies = [];
  diarias = [];
  semanales = [];
  puntuadas = [];
  accion = [];
  drama = [];

  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit() {
    this.movieList();
    this.movieDays();
    this.movieWeeks();
    this.movieRated();
    this.movieDrama();
    this.movieAccion();
  }

  movieList() {
    this.backendService.getMovies().subscribe(
      datos => this.movies = datos['results']
    );
  }

  movieDays() {
    this.backendService.getMovieDay().subscribe(
      datos => this.diarias = datos['results']
    );
  }

  movieWeeks() {
    this.backendService.getMovieWeek().subscribe(
      datos => this.semanales = datos['results']
    );
  }

  movieRated() {
    this.backendService.getMovieRated().subscribe(
      datos => this.puntuadas = datos['results']
    );
  }

  movieDrama() {
    this.backendService.pintarDrama().subscribe(
      datos => this.drama = datos['results']
    );
  }

  movieAccion() {
    this.backendService.pintarAccion().subscribe(
      datos => this.accion = datos['results']
    );
  }

}
