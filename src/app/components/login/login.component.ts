import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent {
  constructor(private router: Router) {}
  nickname: string = '';

  onSubmit() {
    // Lógica para processar os dados do formulário se necessário

    // Navega para a rota desejada (substitua 'menu' pela sua rota real)
    this.router.navigate(['/menu']);
  }
}
