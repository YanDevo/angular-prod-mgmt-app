import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  products: Iproduct[] = [];
  errorMessage: string = '';
  sub!: Subscription;

    // search filter
  private _listFilter: string = "";

  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value); 
  }

  filteredProducts: Iproduct[] = [];





  // Service injection
  constructor(private productSvc: ProductService) {}
 

  toggleImage(): void     {
    this.showImage = !this.showImage;
  }


  // filter Method that is called when setting filter valaue
  performFilter(filterByInput: string) : Iproduct[] {
    filterByInput = filterByInput.toLowerCase();
    return this.products.filter((product: Iproduct) => {
      return product.productName.toLowerCase().includes(filterByInput);
    })
  }




  // On initialization get products and set initial filtered products value to full list of products
  ngOnInit(): void {
    this.sub = this.productSvc.getProducts()
    .subscribe({
      next: productsData => {
        this.products = productsData;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  } 



  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
