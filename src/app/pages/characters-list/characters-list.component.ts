import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { character } from 'src/app/utils/types';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  charactersList = new BehaviorSubject<character[]>([])

  constructor(private router: Router){}

  ngOnInit(): void {
    const characters = localStorage.getItem('characters') || ''
    const parsedCharacters = JSON.parse(characters)
    this.charactersList.next(parsedCharacters)
  }

  back() {
    this.router.navigate(['/'])
  }

  openCharacterDetails(id:number) {
    let url = `character/${id}/1`
    this.router.navigate([url])
  }
}
