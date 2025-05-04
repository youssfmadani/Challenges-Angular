import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tache = '';
  taches : string[] = [];
  ajouterTache(){
    if(this.tache.trim()){
      this.taches.push(this.tache);
      this.tache = '';
    }
  }
  supprimerTache(i: number){
    this.taches.splice(i,1);
  }
  ModfierTache(m: string){
    this.tache = m;
  }
 
}
