import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      NavBarComponent,
      HomeComponent,
      RouterModule,
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Anthony Testing app";

  constructor() { }

  ngOnInit(): void {
  }
}
