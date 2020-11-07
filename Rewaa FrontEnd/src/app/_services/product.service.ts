import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Product } from '@app/_models';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) { }

    url = environment.apiUrl + '/api/products';
    getAll() {
        return this.http.get<Product[]>(this.url);
    }



  create(obj) {
    return this.http.post<any>(this.url, obj) .pipe(map(user => {
      return user;
    }));

  }

  update(id, obj) {
    return this.http.put<any>(this.url +"/" + id, obj) .pipe(map(user => {
      return user;
    }));

  }

  delete(id) {
    return this.http.delete<any>(this.url +"/" + id) .pipe(map(user => {
      return user;
    }));

  }

  get(id) {
    return this.http.get<any>(this.url +"/" + id) .pipe(map(user => {
      return user;
    }));

  }
}
