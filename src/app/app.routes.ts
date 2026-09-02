import { Routes } from '@angular/router';
import { PaginaExpedientes } from './features/expedientes/pages/pagina-expedientes/pagina-expedientes';
import { NotFoundPage } from './core/layout/not-found-page/not-found-page';
import { PaginaDetalleExpediente } from './features/expedientes/pages/pagina-detalle-expediente/pagina-detalle-expediente';
import { FormularioExpedientes } from './features/expedientes/components/formulario-expedientes/formulario-expedientes';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'expedientes', 
        pathMatch: 'full' 
    },
    { 
        path: 'expedientes', 
        component: PaginaExpedientes,
        canActivate: [authGuard]
    },
    { 
        path: 'expedientes/nuevo', 
        component: FormularioExpedientes,
        canActivate: [authGuard]
    },
    { 
        path: 'login', 
        component: LoginPage 
    },
    { 
        path: 'expedientes/:numero', 
        component: PaginaDetalleExpediente,
        canActivate: [authGuard]
    },
    { 
        path: '**', 
        component: NotFoundPage
    }
];
