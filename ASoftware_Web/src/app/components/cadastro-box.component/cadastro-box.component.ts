import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-cadastro-box',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cadastro-box.component.html',
  styleUrl: './cadastro-box.component.css',
})
export class CadastroBoxComponent {
username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {
}

  login() {
    // Credenciais válidas (exemplo)
    const validUsername = 'adm';
    const validPassword = '123';

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(['/home']);
      this.loginError = false; 
    } else {
      this.loginError = true;
    }
  }

  GoBack() {
    this.router.navigate(['/land']);
  }
}

