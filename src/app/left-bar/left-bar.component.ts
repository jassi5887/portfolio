import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  host: {'[class.left-bar]': 'true'}
})
export class LeftBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
