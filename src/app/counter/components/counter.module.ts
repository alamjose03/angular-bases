import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

// Hacemos la declaración de nuestro componente y lo exportamos para que lo use el mundo
// exterior.
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
