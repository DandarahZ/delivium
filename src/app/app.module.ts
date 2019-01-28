import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'

import { APP_ROUTES } from './app.route';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TrackComponent } from './track/track.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { AccountCrudComponent} from './account-crud/account-crud.component';
import { routing } from './app.route';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthService } from './auth.service';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    TrackComponent,
    LandingComponent,
    LogoutComponent,
    UserComponent,
    AccountCrudComponent,
    ProductCrudComponent,
    AdminComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    NgbModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
