import { Component, OnInit } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  public resumo: any;
  
  constructor(public resumoService: ResumoService) {}
  
  ngOnInit() {
    this.resumoService.getResumo()
    .subscribe((dados: any) => this.resumo = dados);
  }}