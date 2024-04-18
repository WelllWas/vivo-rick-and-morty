import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsComponent } from './character-details.component';
import { BehaviorSubject } from 'rxjs';
import { character } from 'src/app/utils/types';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rickandmorty.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' }), // Mocking a route parameter 'id'
            },
          },
        },
        RickAndMortyService
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    const characterData = new BehaviorSubject<character>({
      id: 1,
      name: 'Rick Sanchez',
      image: 'path/to/image.jpg',
      species: 'Human',
      status: 'Alive',
      gender: 'Male',
      type: 'Human with cybernetic enhancements',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Space', url: '' },
      episode: ['1', '2'],
      url: 'string',
      created: new Date()
    })
    component.character = characterData;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display character name in the heading', () => {
   
    fixture.detectChanges();
    const headingElement = fixture.nativeElement.querySelector('h1');
    expect(headingElement.textContent).toContain('Rick Sanchez');
  });

  it('should display character information', () => {
    const infoElement = fixture.nativeElement.querySelector('.character-info');
    const characterValue = component.character.getValue();
    expect(infoElement.textContent).toContain(characterValue.status);
    expect(infoElement.textContent).toContain(characterValue.type || 'Not specified');
    expect(infoElement.textContent).toContain(characterValue.origin.name || 'Not specified');
    expect(infoElement.textContent).toContain(characterValue.location.name || 'Not specified');
    expect(infoElement.textContent).toContain(characterValue.species);
    expect(infoElement.textContent).toContain(characterValue.gender);
  });

});
