import { Component } from '@angular/core';
import { BonjourComponent } from './bonjour/bonjour.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TachesComponent } from "./taches/taches.component";
import { ApiPostsComponent } from "./api-posts/api-posts.component";
import { StatutComponent } from "./statut/statut.component";
import { TodoComponent } from "./todo/todo.component";

@Component({
  selector: 'app-root',
  imports: [BonjourComponent, UtilisateurComponent, TachesComponent, StatutComponent, TodoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  dernierId: number | null = null;

  afficherID(id: number) {
    console.log('ID reçu :', id);
    this.dernierId = id;
  }
}
