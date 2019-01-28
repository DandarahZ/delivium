import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../posts.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any = [];

  public product: any = {};

  constructor(private ProductsService: ProductsService, private AuthService: AuthService) {      // Retrieve posts from the API     
    this.ProductsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  openModal(product) {
    const modal = document.getElementById('modalbg');
    modal.style.display = 'flex';

    this.product.name = product.name;
    this.product.price = product.price;
    this.product.description = product.description;
    this.product.image = product.image;

  }

  ngOnInit() {
    window.onclick = (event) => {
      const modal = document.getElementById('modalbg');
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }
}
