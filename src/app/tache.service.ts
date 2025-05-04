// tache.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TacheService {
  getTaches(): string[] {
    return ['Lire', 'Coder', 'Dormir'];
  }
}
