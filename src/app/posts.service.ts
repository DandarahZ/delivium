import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any[]>('http://localhost:4000/api/products');
  }

  createProduct(product) {
    return this.http.post('http://localhost:4000/api/products/add', product);
  }

  deleteProduct(id) {
    return this.http.delete(`http://localhost:4000/api/products/delete/${id}`);
  }

  updateProduct(id, product) {
    return this.http.put(`http://localhost:4000/api/products/update/${id}`, product);
  }



}


