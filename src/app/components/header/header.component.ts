import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goTo(link) {
    this.router.navigate([link]);
  }
}
