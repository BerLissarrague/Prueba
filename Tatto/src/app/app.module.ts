import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { DescripcionDeServiciosComponent } from './components/descripcion-de-servicios/descripcion-de-servicios.component';
import { TrabajosEchosComponent } from './components/trabajos-echos/trabajos-echos.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescripcionDeServiciosComponent,
    TrabajosEchosComponent,
    TurnosComponent,
    FooterComponent,
    HeaderComponent
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
