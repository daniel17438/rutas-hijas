import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from '../src/auth/pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';



const routes: Routes = [

 { path: 'login', component: LoginComponent },
 { path: 'registro', component: RegistroComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }
