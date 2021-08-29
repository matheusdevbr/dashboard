import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnDestroy, OnInit {

  public resumo: any;
  public inscricao: any;
  
  constructor(private resumoService: ResumoService) {}
  
  ngOnInit() {
    this.inscricao = this.resumoService.getResumo()
    .subscribe((dados: any) => this.resumo = dados);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

