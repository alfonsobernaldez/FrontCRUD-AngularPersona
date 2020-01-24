import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [{
  path: 'listado',
  component: ListadoComponent

},
{ path: 'alta',
  component: AltaComponent

},
{ path: 'editar',
  component: EditarComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
