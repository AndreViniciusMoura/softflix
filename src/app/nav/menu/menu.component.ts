import { Component } from '@angular/core';
import { Nav } from './models/nav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/movies',
      name: 'Movies',
      exact: false,
      admin: false
    },
    {
      link: '/watched-movies',
      name: 'Watched Movies',
      exact: false,
      admin: false
    },
    {
      link: '/wish-movies',
      name: 'My List',
      exact: false,
      admin: false
    }
  ];
}
