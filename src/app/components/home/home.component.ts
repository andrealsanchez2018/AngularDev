import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  classover : any;/* any quiere decir que puede ser de cualquier tipo */

  over(){
    this.classover = "zoom" /* cuando este encima cambie a la clase zoom */
  }

  out(){
    this.classover = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
