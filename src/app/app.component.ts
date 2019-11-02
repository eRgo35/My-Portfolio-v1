import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderAnimation } from './animations/SliderAnimation';

interface ROUTE {
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SliderAnimation]
})

export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  menu: ROUTE[] = [
    {
      route: '',
      title: 'about me',
    },
    {
      route: 'hobbies',
      title: 'hobbies',
    },
    {
      route: 'projects',
      title: 'projects',
    },
    {
      route: 'contact',
      title: 'contact',
    },
  ];
}
