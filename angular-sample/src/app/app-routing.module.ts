import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { ImageInputComponent } from './image-input/image-input.component';
import { GridviewComponent } from './gridview/gridview.component';
const routes: Routes = [
  {path: '', component: GridviewComponent},
  {path: 'caselist', component: GridviewComponent},
  {path: 'imagList', component: ImageInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
