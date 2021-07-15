import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  
  public titulo : string;  
  
  constructor() {
    this.titulo = 'Liga BBVA 2021';    
   }

  ngOnInit(): void {
    
  }

}
