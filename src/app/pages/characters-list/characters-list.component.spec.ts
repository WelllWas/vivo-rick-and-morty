import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RickAndMortyService } from 'src/app/services/rickandmorty.service';
import { character } from 'src/app/utils/types';

describe('RickAndMortyService', () => {
  let service: RickAndMortyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RickAndMortyService],
    });
    service = TestBed.inject(RickAndMortyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve characters via GET request', async(async () => {
    const date = new Date('2017-11-04T20:51:31.373Z');
    const dateInBrasiliaTimeZone = new Date(date.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));

    const mockCharacters: character[] = [
      { 
        id:14,name:"Alien Morty",status:"unknown",species:"Alien",type:"",gender:"Male",origin:{name:"unknown",url:""},location:{name:"Citadel of Ricks",url:"https://rickandmortyapi.com/api/location/3"},image:"https://rickandmortyapi.com/api/character/avatar/14.jpeg",episode:["https://rickandmortyapi.com/api/episode/10"],url:"https://rickandmortyapi.com/api/character/14", 
        created: dateInBrasiliaTimeZone
      }
    ];

    await service.searchCharacter('Alien Morty').then((response) => {
      expect(response[0].name).toEqual(mockCharacters[0].name);
    });
  }));
});