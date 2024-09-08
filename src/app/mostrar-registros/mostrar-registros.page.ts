import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Personas } from '../interfaz/personas.interface';
import { ApiRegistroService } from '../ApiRegistro/api-registro.service';
import { key } from 'ionicons/icons';

@Component({
  selector: 'app-mostrar-registros',
  templateUrl: './mostrar-registros.page.html',
  styleUrls: ['./mostrar-registros.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonBackButton, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MostrarRegistrosPage implements OnInit {
  personas:{[key:string]:any}[]=[]

  constructor(private API : ApiRegistroService) { }

  ngOnInit() {
   
    this.API.obtener_persona().subscribe((res) => {
      this.personas = res
    })
  }

}
