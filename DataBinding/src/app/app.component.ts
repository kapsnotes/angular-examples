import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  stringInterpolation: string = 'String interpolation';
  propertyBinding: string = 'Printed through property binding';
  eventBinding: string = '';
  twoWayBinding: string = '';

  onKeyUp(event) {
    //console.log(event);
    this.eventBinding = event.target.value;

    this.twoWayBinding = event.target.value;

  }
}
