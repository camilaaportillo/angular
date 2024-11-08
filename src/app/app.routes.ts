import { RouterModule, Routes } from '@angular/router';
import { Enlace1Component } from './enlace1/enlace1.component';
import { NgModule } from '@angular/core';
import { BookManagementComponent } from './book-management/book-management.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import { PortadaComponent } from './portada/portada.component';
export const routes: Routes = [
    {path:'enlace1', component: Enlace1Component },
    {path:'libros', component: BookManagementComponent },
    {path: 'paises', component: CountrySearchComponent},
    {path: 'portada', component: PortadaComponent },

];
