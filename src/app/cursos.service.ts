import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CursosService {

  urlEndPoint = 'http://127.0.0.1:8000/api/classe';

	constructor(private http: HttpClient) { }
  
  getCursos(){
    return ['Java', 'PHP', 'Node.js', 'Laravel'];
  }

  getNome(){
    return ['Jeferson Oliveira', 'Jamerson Oliveira', 'Ana Paula', 'Elias'];
  }

  getClasse()
  {
    return 'teste';
  }

  getAll() {
		return this.http.get<any[]>(`${this.urlEndPoint}`);
	}

}
