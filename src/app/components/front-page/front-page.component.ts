import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss'
})
export class FrontPageComponent {

  isLogin!: boolean;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/front/login') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    })
  }
}
