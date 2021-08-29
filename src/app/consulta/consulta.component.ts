import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  public consultas: any;
  public consultaIncricao: any;
  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.consultaIncricao = this.consultaService.getConsultas()
    .subscribe(dados => this.consultas = dados);
  }

  ngOnDestroy() {
    this.consultaIncricao.unsubscribe();
  }

}
