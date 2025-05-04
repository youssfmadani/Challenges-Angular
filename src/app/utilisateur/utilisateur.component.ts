import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  imports: [CommonModule,FormsModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
  
  @Input() nom: string = '';
  message: string = '';

  @Output() supprimer = new EventEmitter<number>();
  route: any;
 

supprimerUtilisateur() {
  this.supprimer.emit(1);
}

ngOnInit(): void {
  const param = this.route.snapshot.paramMap.get('nom');
  if (param) this.nom = param;
}




}
