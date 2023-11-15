import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biome',
  templateUrl: './biome.component.html',
  styleUrls: ['./biome.component.css'],
})
export class BiomeComponent implements OnInit {
  imgs!: NodeListOf<HTMLImageElement>;
  dots!: NodeListOf<HTMLElement>;
  leftArrow!: HTMLElement;
  rightArrow!: HTMLElement;
  currentIndex: number = 0;
  time: number = 7000; // Tempo padrão para apresentação de slides automática

  legendas: string[] = [
    'Montanhas - O bioma de montanhas no Minecraft é caracterizado por grandes elevações de terra, picos rochosos, e vales profundos. É conhecido por suas alturas desafiadoras e por abrigar uma variedade de minérios valiosos. Nele, é comum encontrar cabras, neve e rios gelados, bem como uma paisagem escarpada e desafiadora para construções criativas',
    'Florestas - As florestas no Minecraft são biomas densamente arborizados, compostos por árvores altas e uma variedade de vegetação. Elas são habitadas por uma diversidade de animais, como vacas, porcos, ovelhas, coelhos e lobos. Recursos abundantes, como madeira, frutos silvestres e cogumelos, tornam essas florestas ideais para os jogadores iniciantes.',
    'Florestas de Pinheiro - A floresta de pinheiros é um bioma com árvores altas e estreitas, predominantemente compostas por pinheiros. É comum encontrar neve nesse bioma, além de terrenos acidentados e lagos congelados. A presença de musgos, líquens e uma variedade de recursos torna esse bioma uma ótima fonte de madeira e um ambiente desafiador para a exploração.',
    'Nether - O bioma do Nether é uma dimensão infernal e perigosa no Minecraft, composta por terrenos predominantemente rochosos, mas com elementos únicos, como lava, fogo, fungos luminescentes e estruturas como fortalezas e vilas. Criaturas hostis, como ghasts e blaze, são comuns nesse bioma, e recursos valiosos, como o quartzo do Nether e o portal do Nether, podem ser encontrados aqui.',
  ];

  constructor() {}

  ngOnInit(): void {
    this.imgs = document.querySelectorAll('.slider img');
    this.dots = document.querySelectorAll('.botao i');
    this.leftArrow = document.querySelector('.arrow-left')!;
    this.rightArrow = document.querySelector('.arrow-right')!;

    this.defClass(1, 0);

    this.leftArrow.addEventListener('click', () => {
      this.currentIndex <= 0
        ? (this.currentIndex = this.imgs.length - 1)
        : this.currentIndex--;
      this.defClass(0, this.currentIndex);
      this.atualizarLegenda();
    });

    this.rightArrow.addEventListener('click', () => {
      this.currentIndex >= this.imgs.length - 1
        ? (this.currentIndex = 0)
        : this.currentIndex++;
      this.defClass(0, this.currentIndex);
      this.atualizarLegenda();
    });

    //this.startAutoSlide(); // Inicia o slideshow
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
      this.currentIndex >= this.imgs.length - 1
        ? (this.currentIndex = 0)
        : this.currentIndex++;
      this.defClass(0, this.currentIndex);
      this.atualizarLegenda();
    }, this.time);
  }
}
