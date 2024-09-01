import { Component } from '@angular/core';

@Component({
  selector: 'app-test-logic',
  standalone: true,
  imports: [],
  templateUrl: './test-logic.component.html',
  styleUrl: './test-logic.component.css'
})
export class TestLogicComponent {
  constructor() { }

  ngOnInit(): void {
  }

  // Logic
  public logic: string = 'Hello World';
  public result: string = '';

  public testLogic() {
    if (this.logic === 'Hello World') {
      this.result = 'Correct';
    } else {
      this.result = 'Incorrect';
    }
  }
}
