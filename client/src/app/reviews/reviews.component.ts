import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogreviewComponent } from '../dialogreview/dialogreview.component';
import { Service } from 'src/services/app.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  allReviews = []

  constructor(public dialog: MatDialog, public service: Service, private route: ActivatedRoute) {}

  ngOnInit() {

    this.service.getReviewsByDog(this.route.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.allReviews = data; 
      });
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
