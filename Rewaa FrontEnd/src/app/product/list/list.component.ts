import {Component} from '@angular/core';
import {first} from 'rxjs/operators';

import {Product} from '@app/_models';
import {ProductService, AuthenticationService} from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({templateUrl: 'list.component.html'})
export class ListComponent {
  loading = false;
  products: Product[];

  constructor(private route: ActivatedRoute,
              private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.loading = true;
    this.productService.getAll().pipe(first()).subscribe(products => {
      this.loading = false;
      this.products = products;
    });
  }


  editProduct(id) {
    this.router.navigate(['/editProduct/'+id]);
  }

  viewProduct(id) {
    console.log(id)
    this.router.navigate(['/viewProduct/'+id]);
  }

  deleteProduct(id) {
    this.productService.delete(id).subscribe(products => {
      this.loading = false;
      this.router.navigate(['/listProducts']);

    });
  }
}
