import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-candidatos',
  templateUrl: './tabla-candidatos.component.html',
  styleUrls: ['./tabla-candidatos.component.css']
})
export class TablaCandidatosComponent implements OnInit {

  CandidatoItem = [
    { Id: 1, Departamento: 'San Salvador', Candidato: 'Juan Pérez', Votos: 1000 },
    { Id: 2, Departamento: 'La Libertad', Candidato: 'Maria López', Votos: 800 },
    // ... otros items
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
