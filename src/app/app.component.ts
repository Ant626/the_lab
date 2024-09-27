import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestLogicComponent } from './test-logic/test-logic.component';
import dayjs, { Dayjs } from 'dayjs';
import { greetingEnum } from './enums/greetingEnum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, TestLogicComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = `${greeting}`;
  
  currentHour = dayjs().hour();
  
  constructor() { }
  
  ngOnInit(): void {
    this.logName();
  }
  
  logName() {
    let greeting
    if (this.currentHour >= 18){
      greeting = greetingEnum.Evening;  
      console.log(greeting);
    } else if(this.currentHour >= 12 && this.currentHour <= 17 ){
      greeting = greetingEnum.Afternoon;
      console.log(greeting);
    }else if(this.currentHour <= 11){
      greeting = greetingEnum.Morning;
      console.log(greeting);
    }
    return greeting;
  }
}
