import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expediente } from '../../models/expediente';

@Injectable({ providedIn: 'root' })
export class ExpedientesService {
    httpClient = inject(HttpClient);

    obtenerExpedientes(): Observable<Expediente[]> {
        return this.httpClient.get<Expediente[]>('/api/expedientes');
    }
}
