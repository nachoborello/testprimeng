import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  prefix:String = "";

  url:String = "https://app.xrp.dev/lib/svr/menu/default.asp";

  constructor( private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  async getMenu(){
    let response:any = await this.http.get(this.prefix+""+this.url).toPromise();

    return response.apps;
  }

  async getAppData(id){
    let response:any = await this.http.get(this.prefix+""+this.url).toPromise();
    let appdata = response.apps.find(app => app.idtool == id)
    return appdata;
  }
}
