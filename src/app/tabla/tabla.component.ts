import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
 
})
export class TablaComponent {
  isVisible = false;
  items = [];
  showTable = false; // Controla si la tabla se muestra o no
  randomData: any[] = [];

  constructor(){
    this.generateRandomData(); // Genera datos aleatorios al iniciar
  }
   // Función para generar 5 registros aleatorios
generateRandomData() {
  this.randomData = [];
  for (let i = 0; i < 5; i++) {
  this.randomData.push({
    id: i + 1,
    name: `Registro ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 1 // Número aleatorio
    });
    }
    }

    // Función para alternar la visibilidad de la tabla
toggleTable() {
  this.showTable = !this.showTable;
  // Genera nuevos datos cada vez que se muestra la tabla
  if (this.showTable) {
  this.generateRandomData();
  }
  }
}

