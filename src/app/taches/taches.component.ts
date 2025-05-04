import { Component, OnInit } from '@angular/core';
import { TacheService } from '../tache.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taches',
  imports: [CommonModule],
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  taches: string[] = [];
  constructor(private tacheService: TacheService) {}
  ngOnInit(): void {
    this.taches = this.tacheService.getTaches();
  }
}
