import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rickandmorty.service';
import { FormControl } from '@angular/forms';
import { startWith, map, delay, debounceTime } from 'rxjs/operators';
import { character } from 'src/app/utils/types';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'vivo-rick-and-morty';
  inputControl = new FormControl();
  options: character[] = []
  selectedOption!: number
  filteredOptions!: any;
  searchEnabled: boolean = false
  // filteredOptions!: Observable<character[]> | null;

  constructor(private rickAndMortyService: RickAndMortyService, private router: Router) {
      this.filteredOptions = this.inputControl.valueChanges.pipe(
        debounceTime(500),
        startWith(''),
        map(value => {
          let result = this._filter(value)
          if(result) {
            return result
          } else {
            return null
          }
        })
      );
  }

  navigateToRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * (826 - 1 + 1) + 1)
    let route = `character/${randomCharacter}/2`;
    this.router.navigate([route]);
  }

  navigateToFunFacts() {
    this.router.navigate(['fun-facts'])
  }

  _filter(value: string): character[] | null{
    const filterValue = value.toLowerCase();
    if(this.options){ 
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    } else {
      return null
    }
  }

  async filterSearch() {
    let search = this.inputControl.value
    if(search <= 3 ){ return }
    this.searchEnabled = true
    let results = await this.rickAndMortyService.searchCharacter(this.inputControl.value);
    this.options = results
  }

  search() {
    if(this.selectedOption) {
      const route = `/character/${this.selectedOption}/2`;
      this.router.navigate([route])
    } else {
      localStorage.setItem('characters', JSON.stringify(this.options));
      this.router.navigate(['/characters'])
    }
  }

  setOption(id:number) {
    this.selectedOption = id
  }
}
