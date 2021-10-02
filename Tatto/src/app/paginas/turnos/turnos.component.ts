import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servics/turnos.service';
import { Persona } from 'src/app/models/persona';
import {TurnosModel} from 'src/app/models/turnos';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {
  turnos: any;
  personaRegistrada: any;
  fechaRegistrada: any;
  constructor(private turnosService: TurnosService) { }
  nuevoturno : Persona | undefined
  
  ngOnInit(): void {
    // Turnos cargados desde el endpoint
    this.turnosService.getTurnos().subscribe((result: any) => {
      this.turnos = result;
      this.turnos.sort(this.compararPorTurno); // Ordena por turno
      this.turnos.sort(this.compararPorFecha);//Ordena por fecha
    });

    // O USMOS EL SERVICIO DE ARRIBA PARA CARGAR TURNOS O USAMOS LA LINEA DE ABAJO
    //let listaDeTurnos = JSON.parse(localStorage.getItem("listaDeTurnos"))|| [];
    // this.turnos = listaDeTurnos;
  }
  
  compararPorFecha = (a:any, b:any) => {
    if (a.fecha > b.fecha) {
      return 1;
    }
    if (a.fecha < b.fecha) {
      return -1;
    }
    return 0;
  }

  // Comparar por Fecha
  compararPorTurno = (a:any, b:any) => {
    if (a.turno > b.turno) {
      return 1;
    }
    if (a.turno < b.turno) {
      return -1;
    }
    return 0;
  }

  

  guardarTurno = (event: any) => {
    
    const nombre = ($("#full_name_id")[0] as any).value;
    const edad = ($("#age_id")[0] as any).value;
    const mail = ($("#street1_id")[0] as any).value;
    const fecha = ($("#datepicker")[0] as any).value;
    const turno = ($("#turno_id")[0] as any).value;

    if (edad < 15 || edad > 100) {
      alert('Edad inválida');
      event.preventDefault();
      return;
    } else if (edad >= 15 && edad < 18) {
      alert("Recorda venir con un mayor");
    }

    if (this.turnos.length > 0) {
      // Retorna cliente con turno registrado igual al actual
      this.fechaRegistrada = this.turnos.filter((cliente:any) => cliente.fecha === fecha);

      // Retorna cliente con turno registrado igual al actual
      this.personaRegistrada = this.fechaRegistrada.find((cliente:any) => cliente.turno === turno);

      if (this.personaRegistrada) {
        // Si existe turno actual
        alert("El turno esta dado, intenta otro turno");
        event.preventDefault();
        return;
      }
    }

    if (parseInt(turno) >= 1 && parseInt(turno) <= 7) {
      let nuevoturno: TurnosModel = {
        id: (Math.random()*10).toString(), 
        username: nombre,
        edad: edad,
        email: mail,
        turno: turno,
        fecha: fecha
      }; 
     // (nombre,edad, mail,turno,fecha); 
      this.agregarTurno(this.turnos, nuevoturno);
      this.limpiarForm();
      event.preventDefault();
    }
  }
 
  limpiarForm = () => {
    ($("#full_name_id")[0] as any).value = "";
    ($("#age_id")[0] as any).value = "";
    ($("#age_id")[0] as any).value = "";
    ($("#street1_id")[0] as any).value = "";
    ($("#datepicker")[0] as any).value = "";
    ($("#turno_id")[0] as any).value = "";

  }

  agregarTurno = (turnos: any, nuevoturno: TurnosModel) =>{
  turnos.push(nuevoturno);
  localStorage.setItem("listaDeTurnos", JSON.stringify(turnos));
   
  }
  
  editarTurno = (turnos: any, turno:any) => {
    let turnoActual = this.buscarTurno(this.turnos, turno);
    if (turnoActual) {
        ($("#full_name_id")[0] as any).value = turnoActual.nombre;
        ($("#age_id")[0] as any).value  = turnoActual.edad;
        ($("#street1_id")[0] as any).value = turnoActual.email;
        ($("#datepicker")[0] as any ).value  = turnoActual.fecha;
        ($("#turno_id")[0] as any).value = turnoActual.turno;
       this.eliminarTurno(this.turnos, turnoActual.turno);
    }
  }


   eliminarTurno = (turno: any ,turnos:number) => {
    const index = this.turnos.findIndex((turno:any) => turno.turno === turnos);
    if (index >= 0) {
      this.turnos.splice(index, 1)
        localStorage.setItem("listaDeTurnos", JSON.stringify(this.turnos));

    }
}
 buscarTurno = (event: any, turno: any) => {
  let personaEncontrado = this.turnos.find((persona: { turno: any; }) => persona.turno === turno);
  if (!personaEncontrado) {
      throw Error("no existe la persona");
  }
  return personaEncontrado;
}
}
/*Calendario
  $(function() {
    $("#datepicker").datepicker()
  });

  $("#datepicker").datepicker({
    beforeShowDay: $.datepicker.noWeekends
  });
*/





