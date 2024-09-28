import { Component } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { greetingEnum } from '../enums/greetingEnum';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  currentHour = dayjs().hour();
  
  ngOnInit(): void {
    this.greetingMe();
  }
  

  greetingMe() {
    let greeting
    if (this.currentHour >= 18){
      greeting = greetingEnum.Evening;  
    } else if(this.currentHour >= 12 && this.currentHour <= 17 ){
      greeting = greetingEnum.Afternoon;
    }else if(this.currentHour <= 11){
      greeting = greetingEnum.Morning;
    }
    return greeting;
  }

}
