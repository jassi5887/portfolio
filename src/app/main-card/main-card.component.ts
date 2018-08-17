import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from '../services/nav.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit, OnDestroy {
  navActive = false;
  subscription: Subscription;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.subscription =this.navService.navStatusChanged.subscribe((status) => {
      if (status) {
        this.navActive = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
