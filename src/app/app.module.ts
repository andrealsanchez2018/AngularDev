import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// importar rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FactoryComponent } from './components/factory/factory.component';
import { ProductComponent } from './components/product/product.component';
import { NgbdCarouselBasic } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FactoryComponent,
    ProductComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
