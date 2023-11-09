import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '@coreui/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponetComponent } from './components/first-componet/first-componet.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SlideComponent } from './components/slide/slide.component';
import { Carousel04Component } from './components/carousel04/carousel04.component';
import { GaleriaScssComponent } from './components/galeria-scss/galeria-scss.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponetComponent,
    MenuComponent,
    LoginComponent,
    GaleriaComponent,
    SlideComponent,
    Carousel04Component,
    GaleriaScssComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
