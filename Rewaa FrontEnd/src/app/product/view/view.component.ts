import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Product } from '@app/_models';
import { ProductService, AuthenticationService } from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({ templateUrl: 'view.component.html' })
export class ViewComponent {
    loading = false;
  currentId:number;

  product: Product;

    constructor(private route: ActivatedRoute,
                private router: Router,private productService: ProductService) { }

    ngOnInit() {
      this.route.params.subscribe(params => {

        this.currentId = params['id'];

        this.loading = true;
        this.productService.get(this.currentId).subscribe(products => {
          this.loading = false;
          this.product = products;
          console.log(products)

        });

      });

    }


    deleteProduct(id){
      this.productService.delete(id).subscribe(products => {
        this.loading = false;
        this.router.navigate(['/listProducts']);

      });
    }
}
