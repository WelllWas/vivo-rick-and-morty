import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './services/rickandmorty.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  async ngOnInit(): Promise<void> {
    //await this.rickAndMortyService.load()
  }
  
}
