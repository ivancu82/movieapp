import { Component, OnInit } from '@angular/core';
//LE IMPORTO EL SERVICIO
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.css']
})

export class SearchedListComponent implements OnInit {

  
  search: string;
  busquedas: any[] = [];

  // constructor(private activatedRoute: ActivatedRoute, private _movieService: BackendService, private _router: Router) { 
  //   this.activatedRoute.params.subscribe(params => {
  //     this.search = params['search'];

  //     this._movieService.pintarPeli(this.search).subscribe(datos => {
  //       this.busquedas = datos['results'];
  //       console.log(this.busquedas); 
  //     })
  //   })
  // }


  constructor(private activatedRoute: ActivatedRoute, private _movieService: BackendService, private _router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.search = params['search'];

      this._movieService.pintarPeli(this.search).subscribe(datos => {
        this.busquedas = [];
        datos['results'].forEach(element => {
          if (element.backdrop_path !== null) {
            this.busquedas.push(element);
          }
        });
      })
    })
  }

  ngOnInit() {
    
  }

  iraPeliBuscada(search: string) {
    this._router.navigate(['detalles', search])
  }
 
  

  

}
