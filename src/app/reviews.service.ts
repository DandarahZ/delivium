import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getAllReviews() {
    return this.http.get<any[]>('./api/reviews');
  }

  createReview(review) {
    return this.http.post('./api/reviews/add', review);
  }

  deleteReview(id) {
    return this.http.delete(`./api/reviews/delete/${id}`);
  }

  updateReview(id, review) {
    return this.http.put(`./api/reviews/update/${id}`, review);
  }
}
