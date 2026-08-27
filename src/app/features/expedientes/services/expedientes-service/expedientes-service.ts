import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expediente } from '../../models/expediente';

export interface ExpedientesResponse {
    expedientes: Expediente[];
    total: number;
    skip: number;
    limit: number;
}

@Injectable({ providedIn: 'root' })
export class ExpedientesService {
    httpClient = inject(HttpClient);

    obtenerExpedientes(limit = 30, skip = 0): Observable<ExpedientesResponse> {
        return this.httpClient.get<ExpedientesResponse>('/api/expedientes', {
            params: { limit, skip }
        });
    }

    obtenerExpediente(numero: string): Observable<Expediente> {
        return this.httpClient.get<Expediente>(`/api/expedientes/${encodeURIComponent(numero)}`);
    }
}
