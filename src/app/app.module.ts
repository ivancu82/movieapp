import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// IMPORTO MÓDULO PARA HACER PETICIONES
import { HttpClientModule } from '@angular/common/http';
// IMPORTO MÓDULO DE FORMULARIOS
import { FormsModule } from '@angular/forms';

// IMPORTO MÓDULO DE YOUTUBE
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { EmbedVideo } from 'ngx-embed-video';


// Import your library
import { SlickModule } from 'ngx-slick';

//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallePeliculasComponent } from './peliculas/detalle-peliculas/detalle-peliculas.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SearchedListComponent } from './searched-list/searched-list.component';


//SERVICIOS
import { BackendService } from './backend.service';
import { PathApiWebPipe } from './path-api-web.pipe';
import { SliderComponent } from './peliculas/slider/slider.component';
import { VerpeliculaComponent } from './peliculas/detalle-peliculas/verpelicula/verpelicula.component';
import { YoutubePlayerComponent } from './peliculas/detalle-peliculas/verpelicula/youtube-player/youtube-player.component';
import { VideoytbComponent } from './peliculas/detalle-peliculas/verpelicula/videoytb/videoytb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculasComponent,
    PathApiWebPipe,
    DetallePeliculasComponent,
    BuscarComponent,
    SearchedListComponent,
    SliderComponent,
    VerpeliculaComponent,
    YoutubePlayerComponent,
    VideoytbComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickModule.forRoot(),
    NgxYoutubePlayerModule.forRoot(),
    EmbedVideo.forRoot()
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})

export class AppModule { }
