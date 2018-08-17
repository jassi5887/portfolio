import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainCardComponent } from './main-card/main-card.component';
import { AppRoutingModule } from './app-routing.module';
import { CoverComponent } from './cover/cover.component';
import { NavService } from './services/nav.service';
import { AngularComponent } from './angular/angular.component';
import { NodeComponent } from './node/node.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftBarComponent,
    MainCardComponent,
    CoverComponent,
    AngularComponent,
    NodeComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
