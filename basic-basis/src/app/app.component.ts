import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

/* Decorator para definir um componente */

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearningAngular';

  // Obtendo valor do componente filho
  signin(event: string) {
    console.log('signed', event)
  }
}
