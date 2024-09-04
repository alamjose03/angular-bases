import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule // Es requerido importarlo, para que los componentes de este modulo tengan acceso a ciertas directivas
    //  como lo es el NgIf NgFor, etc.
  ]
})
export class HeroesModule {

}
