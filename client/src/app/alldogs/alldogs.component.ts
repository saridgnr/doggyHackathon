import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-alldogs',
  templateUrl: './alldogs.component.html',
  styleUrls: ['./alldogs.component.scss']
})
export class AlldogsComponent implements OnInit {
  public dogs = [];
  constructor(public service: Service, private route: ActivatedRoute) { }
  ngOnInit() {
    this.service.getDogs()
    .subscribe((data) => {
      this.dogs = data; 
    });
  }
}

  // dogs = [{
  //   name: "rexy",
  //   owner: "tom",
  //   images: ["https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla",
  //   owner: "noam",
  //   images: ["https://www.nedlands.wa.gov.au/sites/default/files/dog1_0.jpeg"],
  //   notGettingAlongWith: []

  // }, {
  //   name: "bla2",
  //   owner: "shirel",
  //   images: ["https://s3-ap-southeast-2.amazonaws.com/sd.production.blog.rent.com.au/blog/wp-content/uploads/2018/07/20180710-Dog-Breed-1.png"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://www.abc.net.au/news/image/9644610-3x2-700x467.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://www.what-dog.net/Images/faces2/scroll008.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }, {
  //   name: "bla3",
  //   owner: "omer",
  //   images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //   notGettingAlongWith: []
  // }];
