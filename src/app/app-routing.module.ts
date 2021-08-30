import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { ResumoComponent } from './resumo/resumo.component';

const routes: Routes = [
  {path: 'resumo', component: ResumoComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'faturamento', component: FaturamentoComponent},
  {path: '**', redirectTo: "/resumo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
