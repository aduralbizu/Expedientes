import { Routes } from '@angular/router';
import { PaginaExpedientes } from './features/expedientes/pages/pagina-expedientes/pagina-expedientes';
import { Login } from './features/login/login';
import { NotFoundPage } from './core/layout/not-found-page/not-found-page';
import { PaginaDetalleExpediente } from './features/expedientes/pages/pagina-detalle-expediente/pagina-detalle-expediente';

export const routes: Routes = [
    { path: 'expedientes', component: PaginaExpedientes },
    { path: 'login', component: Login },
    { path: 'expedientes/:numero', component: PaginaDetalleExpediente },
    { path: '**', component: NotFoundPage}
];
