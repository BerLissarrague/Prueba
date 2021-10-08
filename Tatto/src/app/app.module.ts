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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePickerModule } from 'date-picker-directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescripcionDeServiciosComponent,
    TrabajosEchosComponent,
    TurnosComponent,
    FooterComponent,
    HeaderComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    DatePickerModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
