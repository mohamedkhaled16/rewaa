import { Routes, RouterModule } from '@angular/router';

import {EditComponent as EditProductComponent, ListComponent as ListProductComponent, ViewComponent as ViewProductComponent, CreateComponent as CreateProductComponent} from './product';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import {SignupComponent} from '@app/signup';

const routes: Routes = [
    { path: 'listProducts', component: ListProductComponent, canActivate: [AuthGuard] },
    { path: '', component: ListProductComponent, canActivate: [AuthGuard] },
    { path: 'editProduct/:id', component: EditProductComponent, canActivate: [AuthGuard] },
    { path: 'viewProduct/:id', component: ViewProductComponent, canActivate: [AuthGuard] },
    { path: 'createProduct', component: CreateProductComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
