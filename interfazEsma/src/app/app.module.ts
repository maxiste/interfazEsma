import { PlantillasService } from './plantillas.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantillasComponent } from './plantillas/plantillas/plantillas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PlantillasService], //agreamos el servicio aqui
  bootstrap: [PlantillasComponent]  //hacer los cambios aqui si no se usa el enrutado por el index
  //bootstrap: [AppComponent]  //hacer los cambios aqui si no se usa el enrutado por el index
})
export class AppModule { }
