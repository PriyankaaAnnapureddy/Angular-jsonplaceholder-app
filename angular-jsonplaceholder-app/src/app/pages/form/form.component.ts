import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  feedbackForm: any; // Declare the feedbackForm property
  successMessage: string = ''; // Success message to display after submission

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form in ngOnInit
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Form submitted:', this.feedbackForm.value);
      this.successMessage = 'Thank you for your feedback!'; // Set the success message
      this.feedbackForm.reset(); // Reset the form
    }
  }
}
