import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogreview',
  templateUrl: './dialogreview.component.html',
  styleUrls: ['./dialogreview.component.scss']
})
export class DialogreviewComponent implements OnInit {
  cute:Number
  annoying:Number
  friendly:Number
  sleepy:Number
  silly:Number
  grumpy:Number
  noisy:Number
  smelly:Number

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.smelly)
  }
}
