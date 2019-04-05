import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {

  public dogTrophies = { cute: true,annoying: false, sleepy: true,friendly: false,silly: true,grumpy: true,noisy: false,smelly: true };
  constructor() { }

  ngOnInit() {
  }

}
