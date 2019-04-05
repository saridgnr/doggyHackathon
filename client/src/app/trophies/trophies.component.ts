import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {

  public dogTrophies = [];
  constructor(public service: Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getTrophiesByDog(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.dogTrophies = data; 
      });
  }

}
