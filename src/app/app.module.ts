import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoComponent } from './pages/acceso/acceso.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChefboardComponent } from './pages/chefboard/chefboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlatillosBoardComponent } from './components/platillos/platillos-board/platillos-board.component';
import { PlatilloComponent } from './components/platillos/platillo/platillo.component';
import { CarritoComponent } from './components/platillos/carrito/carrito.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoElementoComponent } from './components/platillos/carrito-elemento/carrito-elemento.component';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    DashboardComponent,
    ChefboardComponent,
    HistoryComponent,
    PlatillosBoardComponent,
    PlatilloComponent,
    CarritoComponent,
    NavbarComponent,
    CarritoElementoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
