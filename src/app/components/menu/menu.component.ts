import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    const nav = document.querySelector(".nav") as HTMLElement;
    const img = document.getElementById('image-menu') as HTMLImageElement;

    if (hamburger && nav) {
      hamburger.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          img.src = "../../assets/img/bau-fechado.png";

          if (img) {
            
          }
        } else {
          nav.classList.add("active");
          img.src = "../../assets/img/bau_aberto.png";
        }
      });
    }


  }
  
}
