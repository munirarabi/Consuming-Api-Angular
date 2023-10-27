import { Component } from '@angular/core';
import { ServiceSpinner } from './services/spinner/service-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public spinnerService: ServiceSpinner) {}
}
