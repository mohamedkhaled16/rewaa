import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Product } from '@app/_models';
import { ProductService, AuthenticationService } from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({ templateUrl: 'create.component.html' })
export class CreateComponent {
  productForm: FormGroup;
  loading = false;
  submitted = false;
  product: Product;
  error = '';

    constructor( private formBuilder: FormBuilder,
                 private route: ActivatedRoute,
                 private router: Router,private productService: ProductService) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required]

    });
  }



  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.productForm.value)
    this.productService.create(this.productForm.value)
      .pipe(first())
      .subscribe(
        data => {
         this.router.navigate(['/listProducts']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
