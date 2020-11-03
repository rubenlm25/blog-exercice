import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis sem vel libero condimentum faucibus sed sit amet ipsum. ',
      loveIts: 0,
      created_at: Date
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis sem vel libero condimentum faucibus sed sit amet ipsum. ',
      loveIts: 1,
      created_at: Date
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis sem vel libero condimentum faucibus sed sit amet ipsum. ',
      loveIts: 3,
      created_at: Date
    }

  ];



}
