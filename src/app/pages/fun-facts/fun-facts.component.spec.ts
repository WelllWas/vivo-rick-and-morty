import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsComponent } from './fun-facts.component';

describe('FunFactsComponent', () => {
  let component: FunFactsComponent;
  let fixture: ComponentFixture<FunFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunFactsComponent]
    });
    fixture = TestBed.createComponent(FunFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the facts title', () => {
    fixture.detectChanges();
    const headingElement = fixture.nativeElement.querySelector('h1');
    expect(headingElement.textContent).toContain('Fun Fact');
  });

  it('should display the fact text', () => {
    fixture.detectChanges();
    const textElement = fixture.nativeElement.querySelector('p');
    expect(textElement.textContent).toBeDefined()
  });

});
