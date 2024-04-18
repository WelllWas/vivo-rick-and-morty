import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HomeComponent } from './pages/home/home.component';
import { FunFactsComponent } from './pages/fun-facts/fun-facts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersListComponent
  },
  { 
    path: 'character/:characterId/:origin', 
    component: CharacterDetailsComponent
  },
  { 
    path: 'fun-facts', 
    component: FunFactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
