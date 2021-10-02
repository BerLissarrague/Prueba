import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionDeServiciosComponent } from './components/descripcion-de-servicios/descripcion-de-servicios.component';
import { HomeComponent } from './paginas/home/home.component';
import { TrabajosEchosComponent } from './components/trabajos-echos/trabajos-echos.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'descripcion-de-servicios', component: DescripcionDeServiciosComponent},
  { path: 'trabajos-echos', component: TrabajosEchosComponent},
  { path: 'turnos', component: TurnosComponent},
  { path: '**',  redirectTo: 'home'}
];
      
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
