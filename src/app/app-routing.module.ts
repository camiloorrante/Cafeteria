import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccesoComponent } from './pages/acceso/acceso.component';
import { ActivoService } from './services/activo/activo.service';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'acceso', component: AccesoComponent, canActivate: [ActivoService] },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent, canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
