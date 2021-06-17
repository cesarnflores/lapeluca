import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class ServicioService extends AbstractService {

    constructor(public http: HttpClient) {
      super(http);
    }
  
    buscarServicios(): Observable<any> {
      return this.getWithObserve(this.EP_SERVICIOS);
    }

   /* buscarEntregas(): Observable<any> {
      return this.getWithObserve(this.EP_ENTREGAS);
    }

    buscarTipoDeCambio(): Observable<any> {
      return this.getWithObserve(this.EP_TIPO_DE_CAMBIO);
    }

    guardarCotizacion(cotizacion: Cotizacion): Observable<Cotizacion> {
      this.removeNullValues(cotizacion);
      console.log('Guardando cotizacion: ' + JSON.stringify(cotizacion));
      return this.postWithObserve(this.EP_COTIZACION, cotizacion);
    }

    buscarConfiguracion(): Observable<any>  {
      return this.getWithObserve(this.EP_CONFIGURACION);
    }

    registrarPrecotizacion(items: number): Observable<any>  {
      return this.postWithObserve(this.EP_REGISTRO + '/' + items, null);
    }

    buscarSeguimiento(idCotizacion: number, cuit: number): Observable<any>  {
      console.log('buscarSeguimiento: ' + idCotizacion + ' - ' + cuit );
      return this.getWithObserve(this.EP_SEGUIMIENTO + '/' + idCotizacion + '/' + cuit);
    }
    */
  

}