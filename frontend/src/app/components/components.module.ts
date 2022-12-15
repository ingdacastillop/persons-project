import { NgModule } from '@angular/core';
import { CardPersonComponentModule } from './card-person/card-person.component.module';
import { FormPersonComponentModule } from './form-person/form-person.component.module';

@NgModule({
  imports: [CardPersonComponentModule, FormPersonComponentModule],
  exports: [CardPersonComponentModule, FormPersonComponentModule],
})
export class ComponentsModule {}
