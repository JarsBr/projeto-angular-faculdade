import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent {
  imgs!: NodeListOf<HTMLImageElement>;
  dots!: NodeListOf<HTMLElement>;
  leftArrow!: HTMLElement;
  rightArrow!: HTMLElement;
  currentIndex: number = 0;
  time: number = 7000; // Tempo padrão para apresentação de slides automática

  legendas: string[] = [
    'Farm de Ferro - Uma farm de ferro no Minecraft é projetada para coletar minério de ferro automaticamente. Geralmente, utiliza aldeões e aldeias para reproduzir golems de ferro, que são criaturas neutras que soltam blocos de ferro ao serem derrotados. Essas farms podem ser construídas em torno de aldeias para capturar esse recurso valioso.',
    'Farm de Ouro com Pigmen - Essa farm é construída no topo do Nether e envolve a interação com pigmen, criaturas hostis neutras. Geralmente, funciona a partir da criação de um espaço onde pigmen são atraídos e automaticamente atacados por um jogador ou por mecanismos automáticos. Isso permite que o jogador colete o ouro que esses pigmen deixam cair.',
    'Mobfarm sobre o Oceano - Uma mobfarm sobre o oceano é uma construção comumente usada para coletar itens deixados por mobs (criaturas) hostis que aparecem à noite. Essas farms são construídas no alto, sobre grandes corpos de água, para maximizar a eficiência na geração de mobs e coleta de itens, já que as criaturas não conseguem aparecer na água.',
    'Farm de Aldeões - Essas farms são projetadas para interagir com aldeões e aproveitar suas habilidades de comércio, reprodução e produção de itens. Podem incluir fazendas automáticas, centros de comércio ou sistemas de transporte que lidam com os aldeões para produzir recursos valiosos, como alimentos, itens encantados, entre outros.'
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
