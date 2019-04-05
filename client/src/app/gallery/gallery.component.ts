import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  dogs = [];
  constructor(public service: Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getDog(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.dogs = data.images; 
      });
  }
}
