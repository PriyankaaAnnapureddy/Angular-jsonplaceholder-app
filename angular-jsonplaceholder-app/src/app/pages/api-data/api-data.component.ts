import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  standalone: true,
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent implements OnInit {
  posts: any[] | null = null; // Store posts data
  isLoading = true; // Show loader while data is fetched
  hasError = false; // Handle errors

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    console.log('Fetching posts from API...');
    this.jsonPlaceholderService.getPosts().subscribe(
      (data) => {
        console.log('Posts fetched successfully:', data);
        this.posts = data; // Assign API response to posts
        this.isLoading = false; // Turn off loader
      },
      (error) => {
        console.error('Error fetching posts:', error);
        this.hasError = true; // Handle errors
        this.isLoading = false; // Turn off loader
      }
    );
  }
}
