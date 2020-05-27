import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css'],
  
})

export class FactoryComponent implements OnInit {

  cardMac1 = {
    
      "nombre":"Maquina de Colombinas",
      "img":"../assets/img/machine1.jpg",
      "funcion":"Encontrarás colombinas multicolor del tamaño hasta de un gigante."
  }

  cardMac2 ={
      "nombre":"Fundidora de Chocolate",
      "img":"../assets/img/machine2.jpg",
      "funcion":"Esta maquina produce gran calor para que el chocolate tenga gran sabor."
  }

  cardMac3 ={
    "nombre":"Maquina goma de mascar",
    "img":"../assets/img/machine3.gif",
    "funcion":"Esta maquina produce goma de mascar en los tamaños y formas que desees."
  }

  cardMac4 ={
    "nombre":"Sala de Inventos Wonka",
    "img":"../assets/img/machine4.gif",
    "funcion":"En esta sala usaras toda tu imaginación para crear nuevos chocolates."
  }

  cardMac5 ={
    "nombre":"Fusionadora de Sabores",
    "img":"../assets/img/machine5.jpg",
    "funcion":"En esta maquina se crean e inventan nuevos sabores para las golosinas."
  }

  cardMac6 ={
    "nombre":"Extractor de Chocolate",
    "img":"../assets/img/machine6.gif",
    "funcion":"En esta maquina se extrae el chocolate para elaborar los mas deliciosos dulces."
  }

  /* imgFactory = ['assets/img/machine1.jpg', 'assets/img/machine2.jpg', 'assets/img/machine3.gif', 'assets/img/machine4.gif', 'assets/img/machine5.jpg'] */
  constructor() { }

   ngOnInit(): void {
  }
 

}
