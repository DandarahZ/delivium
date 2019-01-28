import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  public trackArray: any = [
    "1) Your purchase is being packed!",
    "2) Your package has been picked up and on its way!",
    "3) Your package is almost home!",
    "4) DING DONG OPEN UP! IM ALREDAY HERE!"
  ];

  public htmlArray: any = [
    {
      color: "black",
      text: "1)"
    },
    {
      color: "black",
      text: "2)"
    },
    {
      color: "black",
      text: "3)"
    },
    {
      color: "black",
      text: "4)"
    },

  ];

  constructor() { }

  ngOnInit() {
    this.trackOrder()
  }

  trackOrder() {
    console.log(this.trackArray);
    setTimeout(() => {
      this.htmlArray[0].text = this.trackArray[0];

      setTimeout(() => {
        this.htmlArray[0].color = "gainsboro";
        this.htmlArray[1].text = this.trackArray[1];
        

        setTimeout(() => {
          this.htmlArray[1].color = "gainsboro";
          this.htmlArray[2].text = this.trackArray[2];

          setTimeout(() => {
            this.htmlArray[2].color = "gainsboro";
            this.htmlArray[3].text = this.trackArray[3];

          }, 5000);

        }, 5000);

      }, 5000);

    }, 5000);

  }


}
