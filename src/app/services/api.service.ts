import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/Message';
import { Venta } from '../models/Venta';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public ventas = new BehaviorSubject<Venta[]>([]);
  private apiUri = `${environment.apiUri}api/`;
  public Messages = {
    create: (message: Message) =>
      this.http.post(`${this.apiUri}messages`, { message }),
    get: (userId: string) =>
      this.http.get(`${this.apiUri}messages`, { params: { userId } }),
  };

  public Ventas = {
    create: (venta: Message) =>
      this.http.post(`${this.apiUri}ventas`, { venta }),
    get: () => this.http.get<Venta[]>(`${this.apiUri}ventas`),
  };
}
