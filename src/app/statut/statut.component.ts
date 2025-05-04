import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statut',
  imports: [NgClass],
  templateUrl: './statut.component.html',
  styleUrl: './statut.component.css'
})
export class StatutComponent {
 actif = true;
}
