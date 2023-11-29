import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <h1>Mi formulario reactivo con Angular!</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit()" >
    <div class="mb-3">
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="Escribe tu nombre" formControlName="name"/>
      <br>
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="Escribe tu email" formControlName="email"/>
      <br>
      <button >Enviar</button>
      
    </div>
    </form>
  `,
})
export class App {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.form.value);
  }
}

bootstrapApplication(App);
