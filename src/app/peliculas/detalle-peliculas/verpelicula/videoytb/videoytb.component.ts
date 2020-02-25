import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

//LE IMPORTO EL SERVICIO
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../../../backend.service';

@Component({
  selector: 'app-videoytb',
  templateUrl: './videoytb.component.html',
  styleUrls: ['./videoytb.component.css']
})
export class VideoytbComponent implements OnInit {

  ytb : string;
  traillers : any = {};
  key : string;

  youtubeUrl = 'https://www.youtube.com/embed/';
  youtubeId : string;

  urlV : string;


  constructor(private activatedRoute: ActivatedRoute, private _movieService: BackendService, private embedService: EmbedVideoService) { 

    console.log(this.embedService.embed(this.urlV));
    // console.log(this.embedService.embed_youtube(this.youtubeId));

    this.activatedRoute.params.subscribe(params => {
      this.ytb = params['ytb'];

      this._movieService.getVideoMovie(this.ytb).subscribe(datos => {
        this.traillers = datos;
        this.youtubeId = this.traillers.results[0].key;
        console.log(this.youtubeId)

        this.urlV = this.youtubeUrl+this.youtubeId;
        console.log(this.urlV)
      })
      
    })

  }

  ngOnInit() {
  }

}