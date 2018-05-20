import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';


import { Classe } from '../classes/classe'; 

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any;
  cursos: string[];
  classes: Classe[];
  nomes: string[];
  url = 'http://desenvolvimento.com.br';
  urlImagem = 'http://lorempixel.com/400/200';

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://google.com.br';

    //var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
    this.nomes = this.cursosService.getNome();
    this.getClasse();
  }

  ngOnInit() {
    
  }

  getDados(){
    console.log(this.classes);
  }
  getValue(){
    return 15;
  }

  getClasse() {
    this.cursosService.getAll().subscribe(dados => this.classes = dados);
  }

}
