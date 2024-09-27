import { Component, Input, Output } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { greetingEnum } from '../enums/greetingEnum';
import { FormsModule } from '@angular/forms';
import utc from 'dayjs/plugin/utc';


@Component({
  selector: 'app-test-logic',
  standalone: true,
  imports: [],
  templateUrl: './test-logic.component.html',
  styleUrl: './test-logic.component.css'
})
export class TestLogicComponent {
  @Input()
  @Output()
  
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



