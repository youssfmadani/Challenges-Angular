import { RouterOutlet, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

export const routes: Routes = [
    { path: '', component:RouterOutlet },

    { path: 'utilisateur/:nom', component: UtilisateurComponent }

];
