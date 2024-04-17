import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      productName: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['']
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value); // You can send this data to your backend
      this.submitted = true;
      this.feedbackForm.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 3000); // Reset the submitted state after 3 seconds
    }
  }
}
