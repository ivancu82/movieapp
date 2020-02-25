import { Injectable } from '@angular/core';

// IMPORTO LIBRERIA PARA HACER PETICIONES
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class BackendService {

  url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fd9bfa52ee459c4167b706d3d210b3b1';
  urlTmd: string = 'https://api.themoviedb.org/3/';
  apiKey: string = 'fd9bfa52ee459c4167b706d3d210b3b1';
  youtube: string = 'https://www.youtube.com/watch?v=';


  constructor(private http: HttpClient) { }

  // MÉTODO DE MI SERVICIO
  getMovies() {
    return this.http.get<any[]>(this.url);
  }

  // getTraillerMovie() {
  //   const urlThrillerMovie = `${this.urlTmd}movie/315635/videos?api_key=${this.apiKey}`;
  //   return this.http.get<any[]>(urlThrillerMovie);
  // }

  getMovieId(movie_id) {
    const urlSingleMovie = `${this.urlTmd}movie/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlSingleMovie);
  }

  // RECIBO OBJETOS DE VIDEO
  getVideoMovie(movie_id) {
    const urlVideo = `${this.urlTmd}movie/${movie_id}/videos?api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlVideo);
  }

  getMovieDay() {
    const urlMovieDay = `${this.urlTmd}trending/all/day?api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlMovieDay);
  }

  getMovieWeek() {
    const urlMovieWeek = `${this.urlTmd}trending/all/week?api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlMovieWeek);
  }

  getMovieRated() {
    const urlMovieRated = `${this.urlTmd}movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlMovieRated);
  }

  pintarPeli(texto_busqueda) {
    const urlSearchMovie = `${this.urlTmd}search/movie?api_key=${this.apiKey}&query=${texto_busqueda}`;
    return this.http.get<any[]>(urlSearchMovie);
  }

  pintarAccion() {
    const urlSearchMovie = `${this.urlTmd}discover/movie?with_genres=28&api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlSearchMovie);
  }

  pintarDrama() {
    const urlSearchMovie = `${this.urlTmd}discover/movie?with_genres=18&api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlSearchMovie);
  }

  pintarThriller() {
    const urlSearchMovie = `${this.urlTmd}discover/movie?with_genres=53&api_key=${this.apiKey}`;
    return this.http.get<any[]>(urlSearchMovie);
  }

}


