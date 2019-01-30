import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any[]>('./api/products');
  }

  createProduct(product) {
    return this.http.post('./api/products/add', product);
  }

  deleteProduct(id) {
    return this.http.delete(`./api/products/delete/${id}`);
  }

  updateProduct(id, product) {
    return this.http.put(`./api/products/update/${id}`, product);
  }



}


