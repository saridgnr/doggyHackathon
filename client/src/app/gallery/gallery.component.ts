import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos = ['https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/324/324190/shot-of-a-dog.jpg',
  'https://pbs.twimg.com/profile_images/941322358245154816/tF4dPHrS_400x400.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/324/324190/shot-of-a-dog.jpg',
  'https://pbs.twimg.com/profile_images/941322358245154816/tF4dPHrS_400x400.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/324/324190/shot-of-a-dog.jpg',
  'https://pbs.twimg.com/profile_images/941322358245154816/tF4dPHrS_400x400.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
  'https://cdn1.medicalnewstoday.com/content/images/articles/324/324190/shot-of-a-dog.jpg',
  'https://pbs.twimg.com/profile_images/941322358245154816/tF4dPHrS_400x400.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
