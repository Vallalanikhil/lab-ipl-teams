import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  teams: any;
  constructor() {
    this.teams = [
      {
        name: 'Chennai Super kings',
        website: 'https://chennaisuperkings.com/',
        phonenumber: '965-144-6018',
        image: '../assets/csk.png',
      },
      {
        name: 'Mumbai indians',
        website: 'https://www.mumbaiIndians.com/',
        phonenumber: '1-522-714-2638x44811',
        image: '../assets/MI.png',
      },
      {
        name: 'Rajasthan Royals',
        website: 'https://www.rajastharoyals.com/',
        phonenumber: '(038)030-9641x7086',
        image: '../assets/RR.png',
      },
      {
        name: 'Delhi capitals',
        website: 'https://www.delhicapitals.com/',
        phonenumber: '005-851-7095x72027',
        image: '../assets/Delhi.png',
      },
      {
        name: 'Royal challengers Bangalore',
        website: 'htts://www.royalchallengers.com/',
        phonenumber: '1-471-836-5871x5841',
        image: '../assets/RCB.png',
      },
      {
        name: 'Kolkatha knight riders',
        website: 'https://www.kokathanightriders.com',
        phonenumber: '(247)305-7427',
        image: '../assets/KKR.png',
      },
      {
        name: 'Kings X1 Punjab',
        website: 'https://www.kingsX1punjab.com',
        phonenumber: '98669696',
        image: '../assets/KXI.png',
      },
      {
        name: 'Sunrisers Hyderabad',
        website: 'https://www.sunrisers.com',
        phonenumber: '070-610-2661',
        image: '../assets/SRH.png',
      },
    ];
  }
  ngOnInit(): void {}
}
