import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';

/* Importar CommonMoodule para utilização de diretrizes, como (*ngIf) */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Setting the submitFormService with inject
  private submitFormService = inject(SubmitFormService)

  // Definição de estado
  name = 'Nyco'
  booleanState = false;
  buttonId = 'id-button';
  shouldShowTitle = false;
  items = ['a', 'b', 'c'];

  // Recebendo prop do componente pai
  @Input('name') customInputProp!: string

  // Enviando valor para o componente pai
  @Output() emitNameValue = new EventEmitter<string>()

  // Utilizando funções simples
  simpleFunction() {
    // k
    this.emitNameValue.emit(this.name)
    this.submitFormService.sendInformation('sended')
  }

  // Atualizando valor do estados
  updateBooleanState(value: boolean) {
    this.booleanState = value;
  }

  // Obtendo evento
  getEvent(event: Event) {
    console.log(event)
  }


}
