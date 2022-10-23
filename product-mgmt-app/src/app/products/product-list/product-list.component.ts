import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;

  products: Iproduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
  ];

  // search filter
  private _listFileter = "";

  get listFilter() {
    return this._listFileter;
  }
  set listFilter(value: string){
    this._listFileter = value;
    this.filteredProducts = this.performFilter(value); 
  }

  filteredProducts: Iproduct[] = [];






  constructor() { }



  ngOnInit(): void {
    this._listFileter = "cart";
    console.log(this.filteredProducts)

  }



  // filter Method that is called when setting filter valaue
  performFilter(filterByInput: string) : Iproduct[] {
    filterByInput = filterByInput.toLowerCase();
    return this.products.filter((product: Iproduct) => {
      return product.productName.toLowerCase().includes(filterByInput);
    })
  }

  toggleImage(): void     {
    this.showImage = !this.showImage;
  }

}
