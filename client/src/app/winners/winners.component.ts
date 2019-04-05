import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  topRatedDogs = [
    {
      category: "cute", dog: {
        name: "rexy",
        owner: "tom",
        images: ["https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "smelly", dog: {
        name: "bla",
        owner: "noam",
        images: ["https://www.nedlands.wa.gov.au/sites/default/files/dog1_0.jpeg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "sleepy", dog: {
        name: "bla2",
        owner: "shirel",
        images: ["https://s3-ap-southeast-2.amazonaws.com/sd.production.blog.rent.com.au/blog/wp-content/uploads/2018/07/20180710-Dog-Breed-1.png"],
        notGettingAlongWith: []
      }
    },
    {
      category: "annoying", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://www.abc.net.au/news/image/9644610-3x2-700x467.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "silly", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://www.what-dog.net/Images/faces2/scroll008.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "clumsy", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "clumsy", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "clumsy", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
        notGettingAlongWith: []
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
