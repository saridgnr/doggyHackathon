import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInput, MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { WinnersComponent } from './winners/winners.component';
import { AlldogsComponent } from './alldogs/alldogs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { TabsComponent } from './tabs/tabs.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RatingsComponent } from './ratings/ratings.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TrophiesComponent } from './trophies/trophies.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogvisitComponent } from './dialogvisit/dialogvisit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { HttpClientModule }    from '@angular/common/http';
import { DialogreviewComponent } from './dialogreview/dialogreview.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    WinnersComponent,
    AlldogsComponent,
    TabsComponent,
    RatingsComponent,
    GalleryComponent,
    TrophiesComponent,
    DialogvisitComponent,
    ReviewsComponent,
    DialogreviewComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogvisitComponent, DialogreviewComponent]
})
export class AppModule { }
