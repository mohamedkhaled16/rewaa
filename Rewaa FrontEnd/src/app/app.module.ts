import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {appRoutingModule} from './app.routing';

import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {
  EditComponent as EditProductComponent,
  ListComponent as ListProductComponent,
  ViewComponent as ViewProductComponent,
  CreateComponent as CreateProductComponent
} from './product';
import {LoginComponent} from './login';
import {SignupComponent} from '@app/signup/signup.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  declarations: [
    AppComponent,
    EditProductComponent,
    ListProductComponent,
    ViewProductComponent,
    CreateProductComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
