import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getAllReviews() {
    return this.http.get<any[]>('http://localhost:5000/api/reviews');
  }

  createReview(review) {
    return this.http.post('http://localhost:5000/api/reviews/add', review);
  }

  deleteReview(id) {
    return this.http.delete(`http://localhost:5000/api/reviews/delete/${id}`);
  }

  updateReview(id, review) {
    return this.http.put(`http://localhost:5000/api/reviews/update/${id}`, review);
  }
}
