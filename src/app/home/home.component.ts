import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { TestLogicComponent } from '../test-logic/test-logic.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, TestLogicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
