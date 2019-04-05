import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from '@angular/router';

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
  comment:String
  name:String

  constructor(private service:Service, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit(){
    this.service.saveRate({
      dogID: this.route.snapshot.paramMap.get("id"),
      cute: this.cute,
      annoying: this.annoying,
      friendly: this.friendly,
      sleepy: this.sleepy,
      silly:this.silly,
      grumpy:this.grumpy,
      noisy: this.noisy,
      smelly: this.smelly
    }).subscribe((data)=>{console.log(data);
      this.service.saveReview({name:this.name, comment: this.comment}).subscribe(
        (data)=>console.log(data)
      )
    });
  }
}
