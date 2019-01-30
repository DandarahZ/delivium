import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: any = [];

  public review: any = {
    nickname: '',
    comment: ''
  };

  public reviewUpdate: any = {
    name: '',
    comment:''
  };

  public reviewUpdateId: any = '';

  constructor(private ReviewsService: ReviewsService) {      // Retrieve posts from the API     
    this.getAllReviews();
  }
  ngOnInit() {
  }

  onChangeNickName(value) { this.review.nickname = value }
  onChangeComment(value) { this.review.comment = value }


  onChangeIdUpdate(value) { this.reviewUpdateId = value }
  onChangeNickNameUpdate(value) { this.reviewUpdate.nickname = value }
  onChangeCommentUpdate(value) { this.reviewUpdate.comment = value }

  getAllReviews() {
    this.ReviewsService.getAllReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  submit() {
    this.ReviewsService.createReview(this.review).subscribe(result => {
      this.getAllReviews();
    });
  }

  delete(id) {
    this.ReviewsService.deleteReview(id).subscribe(result => {
      this.getAllReviews();
    });
  }

  update() {
    this.ReviewsService.updateReview(this.reviewUpdateId, this.reviewUpdate).subscribe(result => {
      this.getAllReviews();
    });
  }

}
