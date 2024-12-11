import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to the Country Explorer App</h1>
      <p>Explore countries of the world, view details, and share your feedback.</p>
      <img src="/country.jpg" alt="Country Explorer" class="home-image" />
    </div>
  `,
  styles: [
    `
      .home-container {
        text-align: center;
        margin-top: 50px;
      }

      .home-image {
        width: 100%;
        max-width: 600px;
        height: auto;
        margin-top: 20px;
      }
    `,
  ],
})
export class HomeComponent {}
