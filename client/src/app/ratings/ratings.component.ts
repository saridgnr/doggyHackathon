import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  public categories = [];
  constructor(public service: Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getRatesByDog(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.categories = data; 
      });
  }

}
