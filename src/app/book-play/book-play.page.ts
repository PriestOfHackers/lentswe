import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

export interface Track { 
  name: string;
  path: string; 
}

@Component({
  selector: 'app-book-play',
  templateUrl: './book-play.page.html',
  styleUrls: ['./book-play.page.scss'],
})
export class BookPlayPage implements OnInit {

  playlist: Track[] = [ 
    {
      name: '21 Day Christian devotional for 2021',
      path: './assests/mp3/21_Day_Christian_devotional_by_Paseka_Monyeki.mp3'
    },
    {
      name: 'Creative minds',
      path: './assests/mp3/bensound-creativeminds.mp3'
    },
    {
      name: 'Creative minds',
      path: './assests/mp3/bensound-creativeminds.mp3'
    }
  ];

activeTrack: Track = null;
player: Howl = null;
isPlaying = false;

  constructor() { }

  ngOnInit() {
  }


  start(track: Track){
    console.log("start");
    if(this.player){
      this.player.stop();
    }

    this.player = new Howl({
      src: ['./assets/mp3/21_Day_Christian_devotional_by_Paseka_Monyeki.mp3'],
      onplay:() => {
        this.activeTrack = track;
      },
      onend:() => {

      }
    });
    this.player.play();
  }

  prev(){
    
  }

  next(){

  }

  seek(){

  }

  stop(){
    if(this.player){
      this.player.stop();
    }
  }

  updateProgress(){

  }

}
