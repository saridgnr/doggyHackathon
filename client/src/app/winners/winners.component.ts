import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

<<<<<<< HEAD
  topRatedDogs = [
    {
      category: "Cute", dog: {
        name: "rexy",
        owner: "tom",
        images: ["https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Smelly", dog: {
        name: "bla",
        owner: "noam",
        images: ["https://www.animaloutfitters.nz/images/labrador-wet-dog-1000.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Sleepy", dog: {
        name: "bla2",
        owner: "shirel",
        images: ["data:image/jpeg;base64,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"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Annoying", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://www.abc.net.au/news/image/9644610-3x2-700x467.jpg"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Silly", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIxzwXo0fCr5dPCa8NlyyFhtGiA7PKaJJAschUOBRXHzJdLAATQ"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Friendly", dog: {
        name: "bla2",
        owner: "shirel",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAL-_d3kxMDooATBzI_n-e0F9s3B69DkoPxFIRz4TMlxhmJTzDQ"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Grumpy", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTm-WqUjCty1DRPs1otho4_uPz5Bwh1M8NDItAl_gl3bM3bkZ-sw"],
        notGettingAlongWith: []
      }
    },
    {
      category: "Noisy", dog: {
        name: "bla3",
        owner: "omer",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAWbU8UK7OblrteQzarNQhZK-Aw0YJ11Co148D-CmVsX2E4gctA"],
        notGettingAlongWith: []
      }
    }
  ];
=======
  // topRatedDogs = [
  //   {
  //     category: "cute", dog: {
  //       name: "rexy",
  //       owner: "tom",
  //       images: ["https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "smelly", dog: {
  //       name: "bla",
  //       owner: "noam",
  //       images: ["https://www.nedlands.wa.gov.au/sites/default/files/dog1_0.jpeg"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "sleepy", dog: {
  //       name: "bla2",
  //       owner: "shirel",
  //       images: ["https://s3-ap-southeast-2.amazonaws.com/sd.production.blog.rent.com.au/blog/wp-content/uploads/2018/07/20180710-Dog-Breed-1.png"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "annoying", dog: {
  //       name: "bla3",
  //       owner: "omer",
  //       images: ["https://www.abc.net.au/news/image/9644610-3x2-700x467.jpg"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "silly", dog: {
  //       name: "bla3",
  //       owner: "omer",
  //       images: ["https://www.what-dog.net/Images/faces2/scroll008.jpg"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "clumsy", dog: {
  //       name: "bla3",
  //       owner: "omer",
  //       images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "clumsy", dog: {
  //       name: "bla3",
  //       owner: "omer",
  //       images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //       notGettingAlongWith: []
  //     }
  //   },
  //   {
  //     category: "clumsy", dog: {
  //       name: "bla3",
  //       owner: "omer",
  //       images: ["https://ichef.bbci.co.uk/news/660/cpsprodpb/12A0A/production/_105889267_gettyimages-185227692.jpg"],
  //       notGettingAlongWith: []
  //     }
  //   }
  // ];
>>>>>>> 11e288343491c84557c3fce6d85eee2b9161c13e

  constructor(public service: Service, private route: ActivatedRoute) { }

  topRatedDogs = [];
  ngOnInit() {
    this.service.getBestRates()
      .subscribe((data) => {
        this.topRatedDogs = data; 
      });
  }
}