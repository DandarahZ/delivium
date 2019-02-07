import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  regUser(username: string, pw: string, role: string) {
    return this.http.get('http://localhost:3500/api/reguser/' + username + "/" + pw + "/" + role);
  }
  authUser(username: string, pw: string) {
    return this.http.get('http://localhost:3500/api/authuser/' + username + "/" + pw);
  }

  setSecureToken(secure_token: string) {
    sessionStorage.setItem("LoggedIn", secure_token)
  }

  getSecureToken() {
    return sessionStorage.getItem("LoggedIn")
  }

  setUserRole(role: string) {
    sessionStorage.setItem("UserRole", role);
  }

  getUserRole() {
    return sessionStorage.getItem("UserRole")
  }

  logout() {
    sessionStorage.removeItem("LoggedIn"); sessionStorage.removeItem("UserRole");
  }

  getAllUsers() {
    return this.http.get<any[]>('http://localhost:3500/api/users');
  }

  createUser(user) {
    return this.http.post('http://localhost:3500/api/users/add', user);
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:3500/api/users/delete/${id}`);
  }

  updateUser(id, user) {
    return this.http.put(`http://localhost:3500/api/users/update/${id}`, user);
  }

  isLoggedIn() {
    return this.getSecureToken() !== null;
  }

  isAdmin() {
    return (this.getUserRole() == "Admin");
  }

  isUser() {
    return (this.getUserRole() == "User" || this.getUserRole() == "Admin");
  }
  
}
