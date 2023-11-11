import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FarmComponent } from './components/farm/farm.component';
import { BuildComponent } from './components/build/build.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'galeria/farm', component: FarmComponent},
  {path: 'galeria/build', component: BuildComponent},
  {path: 'galeria/farm', component: FarmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
