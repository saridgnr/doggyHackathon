import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  public categories;
  constructor() { }

  ngOnInit() {
    this.categories = {
      cute: 0,annoying: 0, sleepy: 2,friendly: 4,silly: 5,grumpy: 3,noisy: 1,smelly: 0
    };
  }

}
