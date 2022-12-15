import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  PopupComponentService,
  SnackbarComponentService,
} from '@xofttion-enterprise/angular-components';
import { PersonRepositoty } from 'src/app/infrastructure/person.repository';
import { Person } from '../../domain/person';

@Component({
  selector: 'card-person',
  templateUrl: 'card-person.component.html',
  styleUrls: ['card-person.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardPersonComponent {
  @Input()
  public person?: Person;

  constructor(
    private repository: PersonRepositoty,
    private popup: PopupComponentService,
    private snackbar: SnackbarComponentService
  ) {}

  public onSelect(): void {
    if (this.person) {
      this.repository.select(this.person);
    }
  }

  public onDestroy(): void {
    this.popup.launch({
      title: 'Catálogo de personas',
      message: `¿Desea eliminar ha ${this.person?.fullName}?`,
      approved: {
        label: 'Aceptar',
        onClick: async () => {
          if (this.person) {
            const response = await this.repository.destroy(this.person);

            response.success
              ? this.snackbar.success(response.message)
              : this.snackbar.danger(response.message);
          }
        },
      },
      reject: {
        label: 'Cancelar',
      },
    });
  }
}
