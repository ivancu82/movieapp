import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallePeliculasComponent } from './peliculas/detalle-peliculas/detalle-peliculas.component';
import { SearchedListComponent } from './searched-list/searched-list.component';
import { VerpeliculaComponent } from './peliculas/detalle-peliculas/verpelicula/verpelicula.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'detalles/:slug', component: DetallePeliculasComponent },
  { path: 'player/:ytb', component: VerpeliculaComponent },
  { path: 'peliculasbuscadas/:search', component: SearchedListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
