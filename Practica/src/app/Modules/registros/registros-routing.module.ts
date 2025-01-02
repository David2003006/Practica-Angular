import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalComponent } from "./personal/personal.component";
import { CommonModule } from "@angular/common";

const routes : Routes = [
    {path: 'registro', component: PersonalComponent}
];

@NgModule({
    imports  : [CommonModule, RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class RegistrosRoutingModule{}