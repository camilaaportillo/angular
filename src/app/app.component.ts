import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { Enlace1Component } from './enlace1/enlace1.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { Router } from '@angular/router';
import { BookManagementComponent } from './book-management/book-management.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,  CommonModule,TablaComponent,Enlace1Component, BookManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  constructor(private router: Router){
    this.irPortada(); 
  }

  //para redirigir a la portada de inicio
  irPortada(){
    this.router.navigate(['/portada']);
  }
}

