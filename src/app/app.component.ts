import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestLogicComponent } from './test-logic/test-logic.component';
import { BannerComponent } from './banner/banner.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [RouterOutlet,
      NavBarComponent,
      TestLogicComponent,
      BannerComponent,
      RouterLink,
      RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Anthony Testing app";

  constructor() { }

  ngOnInit(): void {
  }
}
