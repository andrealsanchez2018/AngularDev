/* este archivo se encargara de administrar componentes 
    de acuerdo a las rutas que se le especifique.

    Se importa los modulos para las rutas
*/
// Pertenece o deriva del elemento declarado a ra derecha
// Routes deriva de RouterModule
 import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 

// Importar los componentes que se deben mostrar de acuerdo a la ruta
import {HomeComponent} from './components/home/home.component';
import {FactoryComponent} from './components/factory/factory.component';
import {ProductComponent} from './components/product/product.component';
import {NgbdCarouselBasic} from './components/carousel/carousel.component';
 

/* 
    Crearemos una constante de tipo Routes a través de typescript 
    cuyo valor será un arreglo de json donde tendremos las rutas
    enlazadas o relacionadas con los componentes que deseemos mostrar

    var nombre = 'Kevin' JS
    var nombre : String = 'Kevin' TS
*/

// lavariabe routes pertenece a la clase Routes y 
// va a contener un arreglo de json
 const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'factory', component: FactoryComponent},
    {path: 'product', component: ProductComponent},
    {path: 'carousel', component: NgbdCarouselBasic}
    
]; 

// configuramos uestro decorador NgModule
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
 
}