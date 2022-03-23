import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch:"full"}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
