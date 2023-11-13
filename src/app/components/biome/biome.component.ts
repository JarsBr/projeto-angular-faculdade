import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-biome',
  templateUrl: './biome.component.html',
  styleUrls: ['./biome.component.css']
})
export class BiomeComponent implements OnInit{
  currentIndex = 0;
  images: string[] = [
    '../../assets/img/foto1.png',
    '../../assets/img/foto2.png',
    '../../assets/img/foto3.png',
    '../../assets/img/foto1.png'
  ];

     // Adicione os links correspondentes às imagens
     imageLinks: string[] = [
      'https://github.com/joaog0liveira/to-do-list-java-spring',
      'https://github.com/joaog0liveira/livraria-virtual',
      'https://github.com/joaog0liveira/landing-page',
      'https://github.com/joaog0liveira/Trabalho3ED2'
    ];
    
  legendas: string[] = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Legenda 1',
    'Outra legenda interessante para a imagem 2',
    'Legenda para a terceira imagem do slider',
    'Última legenda para a imagem 4'
  ];

  constructor() {
    
  }

  ngOnInit(): void {
  }
  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}
