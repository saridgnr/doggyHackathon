import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogreviewComponent } from '../dialogreview/dialogreview.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  allReviews = []

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

    this.allReviews = [{
      "_id": "1232",
      "dogID": "lalala",
      "name": "Omer Sarid",
      "comment": "This dog is very cute",
      "date": "hey i am a timestamp",
      "attachment": "some base64 crap"
    },
    {
      "_id": "1232",
      "dogID": "lalala",
      "name": "Omer Sarid",
      "comment": "This dog is not very cute",
      "date": null,
      "attachment": "some base64 crap"
    }]
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogreviewComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
