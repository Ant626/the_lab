import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-data',
  standalone: true,
  imports: [],
  templateUrl: './fake-data.component.html',
  styleUrl: './fake-data.component.css'
})
export class FakeDataComponent implements OnInit {

  ngOnInit(): void {
    
      
        fetch('//dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);
     
    
  }

}
