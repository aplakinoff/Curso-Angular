import { Component } from '@angular/core';

@Component({

  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html'

})

export class VideojuegosComponent{
  public nombre:string;
  public mejorJuego:string;
  public mejorJuegoRetro:string;
  public mostrar_retro:boolean;
  public color1:string;
  public color2:string;
  public year:number;
  public listavideojuegos:Array<any>;


  constuctor(){
    this.nombre = 'Videojuegos 2018';
    this.mejorJuego = "GTA 5";
    this.mejorJuegoRetro= 'Super Mario 64';
    this.mostrar_retro= true;
    this.color1= "yellow";
    this.color2= "red";
    this.year = 2018;
    this.listavideojuegos = [
      'Los Simpson hit and run',
      'assasin credd',
      'call of duty',
      'takken'
    ];

  }

}
