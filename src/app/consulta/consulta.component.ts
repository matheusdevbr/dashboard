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
  public error: boolean = false;
  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.consultaIncricao = this.consultaService.getConsultas()
    .subscribe(dados => this.consultas = dados, error => this.error = true);
  }

  ngOnDestroy() {
    this.consultaIncricao.unsubscribe();
  }

}
