import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  @Input() public key: string;

    player: YT.Player;
    private id: string = this.key;
  
    savePlayer(player) {
      this.player = player;
      console.log('player instance', player)
    }
    onStateChange(event) {
      console.log('player state', event.data);
    }

  constructor() { }

  ngOnInit() {}

}

export class AppComponent {
  
}
