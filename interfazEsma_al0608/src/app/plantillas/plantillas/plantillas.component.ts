import { Plantilla_esma } from './../../entidad/plantilla';
import { Component, OnInit } from '@angular/core';
import { PlantillasService } from 'src/app/plantillas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html'
// ,
//  styleUrls: ['./plantillas.component.css'
//]

})
export class PlantillasComponent implements OnInit {
  public form:FormGroup | undefined; //utilizar formularios reactivos

  public mostrar:boolean=false;
  public plantillas:string[] | undefined
  public sPlantilla:Plantilla_esma; //seleccion de plantilla
  public plantillaResultante:Plantilla_esma[] | any

  public vfondo:string=""
  public tformato:string="html"
  public vformato:string=""

  public vp_esma:string=""
  public vfechai:string=""
  public vfechaf:string=""
  public tfechai:string="01-02-2021"
  public tfechaf:string=""
  public lfondos:string[] | any;
  public lpesmas:string[] | any;



  constructor(private servicioPlantillas:PlantillasService,
              private formBuilder:FormBuilder ) { //agtrgando para los formualrios reactivos

    //ACR= ACTIVBOS HIPOTECARIOS, SESS=HECHOS RELEVANTES,IVSS= PASIVOS, CRM=CONSUMO,AUT= AUTOS
    this.lfondos=[{"fondo":"AUT","descripcion":"Fondo de Coches"},{"fondo":"CRM","descripcion":"Fondo de Consumo"},{"fondo":"IVSS","descripcion":"Pasivos"},{"fondo":"SESS","descripcion":"Hechos Relevantes"},{"fondo":"ACR","descripcion":"Fondo de Activos Hipotecarios"}];

    this.lpesmas=[{"pesma":"pl5","descripcion":"Plantilla ESMA 5"},{"pesma":"pl6","descripcion":"Plantilla ESMA 6"},{"pesma":"pl2","descripcion":"Plantilla ESMA 2"},{"pesma":"pl12","descripcion":"Plantilla ESMA 12"},{"pesma":"pl14","descripcion":"Plantilla ESMA 14"}];

    this.sPlantilla=new Plantilla_esma();

   // this.plantillaResultante=[];

    //this.listarPlantillas(); //que muestre las dos tablas maestras

   }

  ngOnInit(): void {
    //para trabajar con formualrios reactivos
     // this.form=this.formBuilder.group({
     // text: ['', Validators.required] //aqui se decalran las variables
    //});
  }

  public vaciarFormulario():void{
    //Aqui podemos utilizar los formualrios reactivs donde existe un .reset() y vacia el formulario
    this.sPlantilla= new Plantilla_esma()//esta todo undefined
    this.mostrar=false
}

  //metodo Get por fondo y plantilla actual se le agrego parametros adicionales de las fechas
  public buscarPlantillas(){
    console.log("mi fecha desde el Compnente inicia"+this.tfechai)
    this.servicioPlantillas.getPlantillaxfondo(this.sPlantilla.cod_fondo,this.sPlantilla.plantilla_esma)
    .subscribe(data=> {
      console.log("Filtrado -- "+data);
      this.plantillaResultante=data
    })
    this.mostrar=true
  }

  //Otros Metodo Directo peticion de Generacion
  // public tiposFormatos(){
  //   this.servicioPlantillas.getPFormtoP()
  //   .subscribe((data:Plantilla_esma[])=>{
  //     console.log(data)
  //     this.plantillaResultante=data
  //   });
  //    // this.plantillas=data) //cambios al objeto de modelo plantillaResultante
  //     //cambios al objeto de modelo plantillaResultante
  //     this.mostrar=true
  // }


//   public tiposFormatos(){
//     this.servicioPlantillas.getPostFormtoP(this.sPlantilla)
//     .subscribe(data=> {
//       console.log(data);
//         // this.plantillas=data) //cambios al objeto de modelo plantillaResultante
//         this.plantillaResultante=data //cambios al objeto de modelo plantillaResultante
//     })

//       this.mostrar=true

//   }

// //peticion postParametrizada
// public tiposFormatoParam(){
//   this.servicioPlantillas.getInformeP(this.sPlantilla.cod_fondo,this.sPlantilla.plantilla_esma,this.tfechai,this.tfechaf
// //    ,
// //  {text:this.form.value.formato} //uso de formuarlior reactivos
//   )

//   .subscribe(data=>
//    // this.plantillas=data) //cambios al objeto de modelo plantillaResultante
//     this.plantillaResultante=data) //cambios al objeto de modelo plantillaResultante
//     this.mostrar=true
//     console.log("desde el Componente mi fondo "+this.sPlantilla.cod_fondo)
// }

//   public listarPlantillas(){
//     this.servicioPlantillas.getListaPlantillas()
//     .subscribe(data=>this.plantillas=data)
//   }




}
