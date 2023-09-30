import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaCandidatosComponent } from './tabla-candidatos/tabla-candidatos.component';

const routes: Routes = [
  { path: 'tabla-candidatos', component: TablaCandidatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
