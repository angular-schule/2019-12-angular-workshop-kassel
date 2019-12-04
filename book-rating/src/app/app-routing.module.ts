import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules, // with lazy loading
    scrollPositionRestoration: 'enabled',
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
