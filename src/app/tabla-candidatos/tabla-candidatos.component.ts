import { Component, OnInit } from '@angular/core';
import { CandidatosService } from 'src/app/service/candidatos.service';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient

@Component({
  selector: 'app-tabla-candidatos',
  templateUrl: './tabla-candidatos.component.html',
  styleUrls: ['./tabla-candidatos.component.css']
})
export class TablaCandidatosComponent implements OnInit {

  // Variable para almacenar los datos del listado
  medicList: any[] = [];

  constructor(
    
    private http: HttpClient // Inyectar HttpClient
  ) {}

 


  ngOnInit(): void {
    // Realizar la solicitud HTTP a la API para obtener el listado de médicos
    this.http.get('https://localhost:7230/api/Elecciones2019/vista-elecciones-2019')
      .subscribe(
        (data: any[]) => { // Observa un arreglo de objetos, no un objeto único
          // Imprimir los datos en la consola
          console.log('Datos de la API:', data);
  
          // Comprueba si data es un arreglo con al menos un elemento
          if (data.length > 0) {
            // Actualiza medicList con los datos reales de la API
            this.medicList = data;
            console.log(this.medicList);
          } else {
            console.error('La respuesta de la API no contiene datos.');
          }
        },
        (error) => {
          console.error('Error al obtener datos de la API', error);
        }
      );
  }

}
