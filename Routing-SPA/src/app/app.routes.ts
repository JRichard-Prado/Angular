import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/crisis', pathMatch: 'full'},
    {path: 'crisis', component: CrisisListComponent},
    {path: 'heroes', component: HeroesListComponent},
    {path: '**', component: PageNotFoundComponent}

];
