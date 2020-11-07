import {Component} from '@angular/core';
import {first} from 'rxjs/operators';

import {Product} from '@app/_models';
import {ProductService, AuthenticationService} from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({templateUrl: 'edit.component.html'})
export class EditComponent {
  productForm: FormGroup;
  loading = false;
  submitted = false;
  product: Product;
  error = '';
  currentId = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router, private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required]

    });
  }


  // convenience getter for easy access to form fields
  get f() {
    return this.productForm.controls;
  }

  ngOnInit() {


    this.route.params.subscribe(params => {

      this.currentId = params['id'];

      this.loading = true;
      this.productService.get(this.currentId).subscribe(products => {
        this.loading = false;
        this.product = products;

        this.f.name.setValue(products['name']);
        this.f.description.setValue(products['description']);
        this.f.type.setValue(products['type']);
        this.f.price.setValue(products['price']);
        this.f.status.setValue(products['status']);


      });

    });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.productForm.value)
    this.productService.update(this.currentId, this.productForm.value)
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
