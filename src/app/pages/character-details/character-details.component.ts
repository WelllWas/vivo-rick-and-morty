import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { RickAndMortyService } from 'src/app/services/rickandmorty.service';
import { character, episode } from 'src/app/utils/types';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  id!:string | null;
  origin!:string | null;
  character = new BehaviorSubject<character|any>({})
  firstAppearance = new BehaviorSubject<episode|any>({});

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private rickAndMortyService: RickAndMortyService
  ){}

  async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.paramMap.get("characterId");
    this.origin = this.activatedRoute.snapshot.paramMap.get("origin");
    
    if(this.id){
      let response = await this.rickAndMortyService.getCharacterById(+this.id);
      let firstAppearanceReq = response.episode[0]
      let episode = await this.rickAndMortyService.getEpisode(firstAppearanceReq);
      this.firstAppearance.next(episode)
      this.character.next(response)
    }
  }

  back() {
    this.origin == '1' ? 
    this.router.navigate(['/characters'])
    : this.router.navigate(['/'])
  }
}
