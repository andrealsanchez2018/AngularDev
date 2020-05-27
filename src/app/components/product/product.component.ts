import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  
  cardMac1 = {
    
    "nombre":"Barra de Chocolate",
    "img":"../assets/img/candy1.jpg",
    "funcion":"Sabor a fresa."
}

cardMac2 ={
    "nombre":"Goma Laffy",
    "img":"../assets/img/candy2.jpg",
    "funcion":"Color traslucido"
}

cardMac3 ={
  "nombre":"Gobstopper Deli",
  "img":"../assets/img/candy3.jpg",
  "funcion":"Multicolor"
}

cardMac4 ={
  "nombre":"SweetArts",
  "img":"../assets/img/candy4.jpg",
  "funcion":"Bastones"
}

cardMac5 ={
  "nombre":"Nerds",
  "img":"../assets/img/candy5.png",
  "funcion":"Pepitas"
}

cardMac6 ={
  "nombre":"Runts",
  "img":"../assets/img/candy6.jpg",
  "funcion":"Sabor cherry"
}

cardMac7 ={ 
  "nombre":"Oompas",
  "img":"../assets/img/candy7.jpg",
  "funcion":"Centro liquido"
}

cardMac8 ={
  "nombre":"Bottle Caps",
  "img":"../assets/img/candy8.png",
  "funcion":"Multisabor"
}

cardMac9 ={
  "nombre":"Son llamados Oompa Loompa",
  "img":"../assets/img/umpa1.jpg",
  "funcion":"Ellos son un enorme equipo, lleno de diversion extrema."
}

cardMac10 ={
  "nombre":"Forma de trabajar",
  "img":"../assets/img/umpa5.gif",
  "funcion":"En esta forma se divierten mientras fabrican deliciosos dulces."
}
  constructor() { }

  ngOnInit(): void {
  }

}
