import { Routes } from '@angular/router';
import { PaginaExpedientes } from './features/expedientes/pages/pagina-expedientes/pagina-expedientes';
import { Login } from './features/login/login';
import { NotFoundPage } from './core/layout/not-found-page/not-found-page';
import { PaginaDetalleExpediente } from './features/expedientes/pages/pagina-detalle-expediente/pagina-detalle-expediente';
import { FormularioExpedientes } from './features/expedientes/components/formulario-expedientes/formulario-expedientes';

export const routes: Routes = [
    { path: '', redirectTo: 'expedientes', pathMatch: 'full' },
    { path: 'expedientes', component: PaginaExpedientes },
    { path: 'expedientes/nuevo', component: FormularioExpedientes },
    { path: 'login', component: Login },
    { path: 'expedientes/:numero', component: PaginaDetalleExpediente },
    { path: '**', component: NotFoundPage}
];
