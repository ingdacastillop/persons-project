import { NgModule } from '@angular/core';
import {
  IconComponentModule,
  PopupComponentModule,
  SnackbarComponentModule,
} from '@xofttion-enterprise/angular-components';
import { CardPersonComponent } from './card-person.component';

@NgModule({
  imports: [IconComponentModule, PopupComponentModule, SnackbarComponentModule],
  declarations: [CardPersonComponent],
  exports: [CardPersonComponent],
})
export class CardPersonComponentModule {}
