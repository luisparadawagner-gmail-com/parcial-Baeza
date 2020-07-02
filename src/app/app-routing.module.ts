import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscribirComponent } from './inscribir/inscribir.component';
import { ConsultarComponent } from './consultar/consultar.component';


const routes: Routes = [
  { path: 'inscribir-component', component: InscribirComponent  },
{ path: 'consultar-component', component: ConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
