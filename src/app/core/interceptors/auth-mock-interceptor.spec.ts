import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { authMockInterceptor } from './auth-mock-interceptor';
import { LoginResponse } from '../../features/auth/models/auth.interface';

describe('authMockInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authMockInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('accepts valid credentials', async () => {
    const request = new HttpRequest('POST', '/api/auth/login', {
      user: 'admin',
      pass: 'admin',
    });

    const event = await firstValueFrom(
      interceptor(request, () => {
        throw new Error('The login request was not intercepted');
      })
    );

    expect(event).toBeInstanceOf(HttpResponse);
    expect((event as HttpResponse<LoginResponse>).body?.user).toBe('admin');
    expect((event as HttpResponse<LoginResponse>).body?.rol).toBe('EDITOR');
  });

  it('rejects invalid credentials', async () => {
    const request = new HttpRequest('POST', '/api/auth/login', {
      user: 'admin',
      pass: 'incorrecta',
    });

    await expect(
      firstValueFrom(interceptor(request, () => {
        throw new Error('The login request was not intercepted');
      }))
    ).rejects.toMatchObject({ status: 401 });
  });
});
