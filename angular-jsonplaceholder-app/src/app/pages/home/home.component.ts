import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to JSONPlaceholder App</h1>
      <p>
        Explore the features of this app. Fetch data from JSONPlaceholder API,
        and try out the feedback form.
      </p>
    </div>
  `,
  styles: [
    `
      .home-container {
        text-align: center;
        margin-top: 50px;
      }
    `,
  ],
})
export class HomeComponent {}
