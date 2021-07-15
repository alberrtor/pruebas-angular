import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})

export class EquipoComponent implements OnInit {

  public nombreEquipo : string = "Cruz azul";
  public isAvailable : boolean = false;
  @Input() jugadores: any = [
    { numero: 18, nombre: "Victor", posicion: "delantero"},
    { numero: 8, nombre: "Alberto", posicion: "medio"},
    { numero: 7, nombre: "Cristiano", posicion: "delantero"}
  ]

  @Input() equipo : string = "";

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  mostrarJugadores () {
    this.isAvailable = !this.isAvailable;
  }
}
