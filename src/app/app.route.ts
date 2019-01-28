import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TrackComponent } from './track/track.component';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { AccountCrudComponent } from './account-crud/account-crud.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { AuthGuard } from './auth.guard';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent, },
  { path: 'register', component: RegisterComponent },
  { path: 'track', component: TrackComponent },
  { path: '', component: LandingComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'accountcrud', component: AccountCrudComponent, canActivate: [AuthGuard], data: { permission: { only: ["Admin"] } } },
  { path: 'productcrud', component: ProductCrudComponent, canActivate: [AuthGuard], data: { permission: { only: ["Admin"] } } },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 
