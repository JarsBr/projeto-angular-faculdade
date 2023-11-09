import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'galeria', component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
