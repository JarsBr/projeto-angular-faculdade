import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biome',
  templateUrl: './biome.component.html',
  styleUrls: ['./biome.component.css']
})
export class BiomeComponent {

  imgs!: NodeListOf<HTMLImageElement>;
  dots!: NodeListOf<HTMLElement>;
  leftArrow!: HTMLElement;
  rightArrow!: HTMLElement;
  currentIndex: number = 0;
  time: number = 7000; // Tempo padrão para apresentação de slides automática

  legendas: string[] = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Legenda 1',
    'Outra legenda interessante para a imagem 2',
    'Legenda para a terceira imagem do slider',
    'Última legenda para a imagem 4'
  ];

  constructor() {}

  ngOnInit(): void {
    this.imgs = document.querySelectorAll('.slider img');
    this.dots = document.querySelectorAll('.botao i');
    this.leftArrow = document.querySelector('.arrow-left')!;
    this.rightArrow = document.querySelector('.arrow-right')!;

    this.defClass(1, 0);

    this.leftArrow.addEventListener('click', () => {
      this.currentIndex <= 0 ? (this.currentIndex = this.imgs.length - 1) : this.currentIndex--;
      this.defClass(0, this.currentIndex);
      this.atualizarLegenda();
    });

    this.rightArrow.addEventListener('click', () => {
      this.currentIndex >= this.imgs.length - 1 ? (this.currentIndex = 0) : this.currentIndex++;
      this.defClass(0, this.currentIndex);
      this.atualizarLegenda();
    });

    // this.startAutoSlide(); // Inicia o slideshow
  }

  defClass(startPos: number, index: number): void {
    for (let i = startPos; i < this.imgs.length; i++) {
      this.imgs[i].style.display = 'none';
      this.dots[i].classList.remove('fa-dot-circle');
      this.dots[i].classList.add('fa-circle');
    }
    this.imgs[index].style.display = 'block';
    this.dots[index].classList.add('fa-dot-circle');
    this.atualizarLegenda();
  }

  atualizarLegenda(): void {
    const legendaElement = document.getElementById('legenda');
    if (legendaElement) {
      legendaElement.textContent = this.legendas[this.currentIndex];
    }
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.currentIndex >= this.imgs.length - 1 ? (this.currentIndex = 0) : this.currentIndex++;
      this.defClass(0, this.currentIndex);
      this.atualizarLegenda();
    }, this.time);
  }

}
