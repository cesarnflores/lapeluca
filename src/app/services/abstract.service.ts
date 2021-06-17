import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AbstractService {

    EP_SERVICIOS: string = environment.serverUrl + environment.servicioEndpoint; 
    /*EP_ENTREGAS: string = environment.serverUrl + environment.entregasEndpoint;
    EP_COTIZACION: string = environment.serverUrl + environment.cotizacionEndpoint; 
    EP_TIPO_DE_CAMBIO: string = environment.serverUrl + environment.tipoDeCambioEndpoint; 
    EP_CONFIGURACION: string = environment.serverUrl + environment.configuraciones;
    EP_REGISTRO: string = environment.serverUrl + environment.registro;
    EP_SEGUIMIENTO: string = environment.serverUrl + environment.seguimiento;
    EP_MAIL: string = environment.serverUrl + environment.envioMail;
*/
    resetInputEvent: Subject<any> = new Subject<any>();

    constructor(public http: HttpClient) {

    }

    getProperty(property: string, findSearchEntity: any) {
        if (findSearchEntity[property]) {
            return '&' + property + '=' + findSearchEntity[property];
        } else {
            return '';
        }
    }

    removeNullValues(element: any): void {
        const vals = Object.keys(element);
        if (vals.length > 1) {
            vals.forEach(field => {
                if (
                    element[field] == null ||
                    element[field] === ''
                ) {
                    delete element[field];
                } else {
                    this.removeNullValues(element[field]);
                }
            });
        }
    }

    public getQueryParamByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    public saveToken(token: string) {
       // this.storageService.setItem('token', token);
    }

    public getToken(): string {
        return '' /*this.storageService.getStorageSessionItem('token')*/;
    }

    public getWithObserve(uri: string): Observable<any> {
        return this.http.get<any>(uri, {observe: 'response', headers: {Authorization: this.getToken()}});
    }

    public get(uri: string, options = {}) {
        return this.http.get<any>(uri, options);
    }

    public postWithObserve(uri: string, body: any): Observable<any> {
        return this.http.post<any>(uri, body, {observe: 'response', headers: {Authorization: this.getToken()}});
    }

    public post(uri: string, body: any, options = {}) {
        return this.http.post<any>(uri, body, options);
    }

    public putWithObserve(uri: string, body: any = {}): Observable<any> {
        return this.http.put<any>(uri, body, {observe: 'response', headers: {Authorization: this.getToken()}});
    }

    public put(uri: string, options = {}) {
        return this.http.put<any>(uri, options);
    }

    public deleteWithObserve(uri: string): Observable<any> {
        return this.http.delete<any>(uri, {observe: 'response', headers: {Authorization: this.getToken()}});
    }

    public delete(uri: string, options = {}) {
        return this.http.delete<any>(uri, options);
    }

    public patch(uri: string, options = {}) {
        return this.http.patch<any>(uri, {observe: 'response', headers: {Authorization: this.getToken()}});
    }

    public patchWithObserve(uri: string, body: any): Observable<any> {
        return this.http.patch<any>(uri, body, {observe: 'response', headers: {Authorization: this.getToken()}});
    }

    generarQueryParams(queryParams): URLSearchParams {
        const queriesParam = new URLSearchParams();
        Object.keys(queryParams).forEach(p => {
            if (queryParams[p] != null) {
                queriesParam.append(p, queryParams[p]);
            }
        });
        return queriesParam;
    }

}
