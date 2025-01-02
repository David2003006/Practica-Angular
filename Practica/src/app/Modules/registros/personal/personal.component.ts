import { Component } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/Usuario';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  imprimir : Usuario[] = [];

onSubmit(values : Usuario) {
  this.imprimir.push(values)
  console.log(this.imprimir)
}

}
