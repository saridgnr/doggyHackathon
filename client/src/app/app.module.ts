import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { WinnersComponent } from './winners/winners.component';
import { AlldogsComponent } from './alldogs/alldogs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsComponent } from './tabs/tabs.component';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    WinnersComponent,
    AlldogsComponent,
    TabsComponent
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
