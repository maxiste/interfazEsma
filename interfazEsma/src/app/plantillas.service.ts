import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Plantilla_esma } from './entidad/plantilla';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class PlantillasService {
  //private miruri="http://localhost:9500/plantilla/"
 private  miruri=""
  private uri="http://localhost:9500/esma"

  private headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) {

   }


   //metodos de peticiones al Servicio

//Otras BusquedaPlantilla busqueda fondo y plantilla Actyul de Backend
public getPlantillaxfondo(fondo:string, p_esma:string):Observable<any[]>{
  //{params:{{propiedaModelo:variabledefinidaMetodo}}
  return this.http.get<Plantilla_esma[]>(`${this.uri}/plantillas/`,{params:{fondo:fondo,plantilla_esma:p_esma}});
 }

  //  //Con Peticiones Post difernete al 2205 noche
  //  public getPostFormtoP(plantilla:Plantilla_esma):Observable<Plantilla_esma[]>{ //se le agrego el Observable 2205
  //   console.log("Generamos nuestro nueva Plantilla --> "+plantilla.cod_fondo)
  //   return this.http.post<Plantilla_esma[]>(`${this.uri}/plantilla/`,{params:{sPlantilla:plantilla}}) //quitamoe el header porque lo tenemos en el Backend
  // }
  // // public getPFormtoP(plantilla:Plantilla_esma):Observable<Plantilla_esma[]>{ //se le agrego el Observable 2205
  // //   console.log("Generamos nuestro nueva Plantilla --> "+plantilla.cod_fondo)
  // //   return this.http.post<Plantilla_esma[]>(`${this.uri}/plantilla/`,{params:{sPlantilla:plantilla}}) //quitamoe el header porque lo tenemos en el Backend
  // // }


  //  //con parametros
  //  public getInformeP(fondo:string, p_esma:string,fInicial:string,fFinal:string){
  //   console.log("Generamos nuestro nueva Plantilla --> "+fondo)
  //   console.log("enviado"+p_esma);
  //   return this.http.post<Plantilla_esma[]>(`${this.uri}/informe/`,{params:{fondo:fondo,plantilla_esma:p_esma,tfechai:fInicial,tfechaf:fFinal}},{headers: new HttpHeaders({'Content-Type':'application/json'})}) //quitamoe el header porque lo tenemos en el Backend

  // }



  // //Otras Busqudadas de plantillas
  // public getPlantilla(fondo:string, p_esma:string,fInicial:string,fFinal:string):Observable<any>{
  //   //{params:{{propiedaModelo:variabledefinidaMetodo}}
  //   return this.http.get<Plantilla_esma[]>(`${this.uri}/plantillas/`,{params:{fondo:fondo,plantilla_esma:p_esma,fechaI:fInicial,fechaF:fFinal}});
  //  }


  //  //Lista General
  //  public getListaPlantillas(){
  //    return this.http.get<string[]>(this.uri)
  //  }

  //   //Lista General
  //   public getFormto(vformato:string){

  //     return this.http.get<string[]>(this.uri,{params:{tformato:vformato}})
  //   }




}
