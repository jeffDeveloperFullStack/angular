import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'PHP', 'Node.js', 'Laravel'];
  }

  getNome(){
    return ['Jeferson Oliveira', 'Jamerson Oliveira', 'Ana Paula', 'Elias'];
  }
}
