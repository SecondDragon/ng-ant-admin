import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'shrink-form', pathMatch: 'full' },
  { path: 'shrink-form', loadChildren: () => import('./shrink-form/shrink-form.module').then(m => m.ShrinkFormModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
