import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private hamburger: HTMLElement | null = null;
  private nav: HTMLElement | null = null;

  constructor() {}

  ngOnInit() {
    this.hamburger = document.querySelector(".hamburger") as HTMLElement;
    this.nav = document.querySelector(".nav") as HTMLElement;
    
    if (this.hamburger) {
      this.hamburger.addEventListener("click", () => {
        if (this.nav) {
          this.nav.classList.toggle("active");
        }
      });
    }
  }
}
