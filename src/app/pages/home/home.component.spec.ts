import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RickAndMortyService } from 'src/app/services/rickandmorty.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let service: RickAndMortyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, MatAutocompleteModule, ReactiveFormsModule],
      providers: [RickAndMortyService],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = TestBed.inject(RickAndMortyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the home title', () => {
    fixture.detectChanges();
    const headingElement = fixture.nativeElement.querySelector('h1');
    expect(headingElement.textContent).toContain('Rick and Morty');
  });
  
  it('should display the input', () => {
    const inputElement = debugElement.query(By.css('input'));
    expect(inputElement).toBeTruthy();
  });
  
  it('should display the main buttons', () => {
    const buttonElements = debugElement.queryAll(By.css('button'));
    expect(buttonElements.length).toBe(3);
  });

});