import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringAngular';

  constructor(private route: Router) {}

  verListado() {

    this.route.navigate(['listado']);
  }
  verAlta() {
    this.route.navigate(['alta']);
  }
}
