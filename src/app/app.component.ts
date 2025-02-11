import { Component } from '@angular/core';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'firebase-mcve';
  message: string = '';

  constructor(private service: Service) {}

  myFunction() {
    this.service.test().subscribe((data) => {
      this.message = "back end resp: " + JSON.stringify(data); 
    })
  }
}
