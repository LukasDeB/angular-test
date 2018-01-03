import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: Http) {
  }

  getProducts(){
  	return this.http.get(this.apiUrl).map((res: Response) => res.json() );
  }
}
