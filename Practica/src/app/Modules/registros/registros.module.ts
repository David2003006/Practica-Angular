import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { RegistrosRoutingModule } from './registros-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    RegistrosRoutingModule,
    FormsModule
  ]
})
export class RegistrosModule { }
