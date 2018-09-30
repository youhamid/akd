import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LivreDetailComponent } from './livre-detail/livre-detail.component';

const routes: Routes = [
  { path: 'livres' , component: LivresComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: LivreDetailComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})

export class AppRoutingModule { }
