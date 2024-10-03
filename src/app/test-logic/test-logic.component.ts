import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-logic',
  standalone: true,
  imports: [],
  templateUrl: './test-logic.component.html',
  styleUrl: './test-logic.component.css'
})
export class TestLogicComponent implements OnInit{


  ngOnInit(){
   
    function myName(){
      console.log('Tony')
    }
    myName();


  }


  }




