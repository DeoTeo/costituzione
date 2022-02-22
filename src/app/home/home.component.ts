import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '@vime/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@ViewChild('player') player!: Player;

  onPlaybackReady() {
    // ...
  }

}
