import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn = false;

  constructor() { }

  ngOnInit() {
    window.onload = (event) => {
      const nav = document.getElementById('accountAdmin,productAdmin,logout');
      if (event.target === nav) {
        nav.style.display = "none";
      }
    }
  }



}
