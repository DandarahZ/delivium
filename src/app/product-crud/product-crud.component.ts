import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../posts.service';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  products: any = [];

  public product: any = {
    name: '',
    description: '',
    brand: '',
    price: ''
  };

  public productUpdate: any = {
    name: '',
    description: '',
    brand: '',
    price: ''
  };

  public productUpdateId: any = '';

  constructor(private ProductsService: ProductsService) {      // Retrieve posts from the API     
    this.getAllProducts();
  }

  ngOnInit() {

  }

  onChangeName(value) { this.product.name = value }
  onChangeBrand(value) { this.product.brand = value }
  onChangeDescription(value) { this.product.description = value }
  onChangePrice(value) { this.product.price = value }

  onChangeIdUpdate(value) { this.productUpdateId = value }
  onChangeNameUpdate(value) { this.productUpdate.name = value }
  onChangeBrandUpdate(value) { this.productUpdate.brand = value }
  onChangeDescriptionUpdate(value) { this.productUpdate.description = value }
  onChangePriceUpdate(value) { this.productUpdate.price = value }

  getAllProducts() {
    this.ProductsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  submit() {
    const products = this.products;
    this.ProductsService.createProduct(this.product).subscribe(result => {
      this.getAllProducts();
    });
  }

  delete(id) {
    this.ProductsService.deleteProduct(id).subscribe(result => {
      this.getAllProducts();
    });
  }

  update() {
    this.ProductsService.updateProduct(this.productUpdateId, this.productUpdate).subscribe(result => {
      this.getAllProducts();
    });
  }



}
