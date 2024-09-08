import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonInput, IonLabel, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonRadioGroup, IonRadio } from '@ionic/angular/standalone';
import { Personas } from '../interfaz/personas.interface';
import { ApiRegistroService } from '../ApiRegistro/api-registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonRadio, IonRadioGroup,  ReactiveFormsModule, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonLabel, IonInput, IonItem, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RegistroPage implements OnInit {

  registro: FormGroup;
  Nuevapersona!:Personas;

  constructor(public fb: FormBuilder) {
    this.registro = this.fb.group({
      "nombre": new FormControl("",Validators.required),
      "apellido": new FormControl("",Validators.required),
      "edad": new FormControl("",Validators.required),
      "sexo": new FormControl("",Validators.required),
      "correo": new FormControl("",Validators.required),
      "contraseña": new FormControl("",Validators.required),
    })
  }

  ngOnInit() {

  }
  registrar(){
    console.log("registrar")
    var f = this.registro.value;
    console.log (f)
    this.Nuevapersona={
      nombre: f.nombre,
      apellido: f.apellido,
      edad: f.edad,
      sexo: f.sexo,
      correo: f.correo,
      contraseña: f.contraseña,
    }


  
  }
}
