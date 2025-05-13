import { Injectable } from '@angular/core';

/* Decorator para definir um Injectable Service */

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  constructor() {

  }

  sendInformation(data: any) {
    console.log(data)
  }
}
