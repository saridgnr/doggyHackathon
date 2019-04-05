import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(public service: Service, private route: ActivatedRoute) { }
  dog: any;
  ngOnInit() {
    this.initDog();
  }

  initDog() {
    this.service.getDog(this.route.snapshot.paramMap)
      .subscribe((data) => this.dog = data);
  }

}
