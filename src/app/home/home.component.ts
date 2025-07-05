import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private service: PlayerService) {
      this.service.getPlayers().subscribe(response => {console.log(response)})
  }

}
