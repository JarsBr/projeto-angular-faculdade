import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {

  imgs!: NodeListOf<HTMLImageElement>;
  dots!: NodeListOf<HTMLElement>;
  leftArrow!: HTMLElement;
  rightArrow!: HTMLElement;
  currentIndex: number = 0;
  time: number = 7000; // Tempo padrão para apresentação de slides automática

  legendas: string[] = [
    'Pequena Vila Pessoal - Esta construção é uma vila pessoal compacta e funcional. Inclui uma casa pequena para abrigo e armazenamento, um pequeno campo de trigo para agricultura, um poço de mina para acesso a recursos minerais e um local de encantamento para melhorar equipamentos. É uma base inicial completa, oferecendo as necessidades básicas para um jogador.',
    'Central de Troca de Itens - Esta construção é um centro de comércio avançado, onde vários aldeões (villagers) oferecem diferentes itens e serviços. Geralmente, é um espaço organizado com áreas designadas para cada tipo de aldeão, permitindo a troca de itens valiosos e aquisição de materiais específicos por meio de negociações com os villagers.',
    'Casa Pessoal como Mansão - Uma mansão branca com vidro nas entradas é uma construção esteticamente atraente e espaçosa. Ela apresenta um design elegante, geralmente com grandes janelas de vidro e espaços abertos, proporcionando uma sensação de modernidade e sofisticação. É uma casa pessoal ampla e bem decorada, oferecendo um ambiente luxuoso no mundo do jogo.',
    'Nether Hub - Um Nether Hub é uma construção no Nether que serve como um ponto central de transporte e conexão entre várias localizações. Ele é projetado para ser altamente funcional, com trilhos, portais do Nether, túneis e sinalizações para facilitar a navegação e o acesso rápido a diferentes regiões no Nether, sendo uma peça fundamental para a conveniência na exploração deste ambiente perigoso.',
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
