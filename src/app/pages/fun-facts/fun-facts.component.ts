import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { fact } from 'src/app/utils/types';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss']
})
export class FunFactsComponent implements OnInit {
  chosenFact = new BehaviorSubject<fact | any>({});
  facts: fact[] = [
    {id: 1, text: "Did you know that the burping habit of Rick Sanchez, one of the show's main characters, is inspired by a real-life trope from classic science fiction? The co-creator Justin Roiland, who also voices Rick, mentioned in interviews that the idea came from a parody of the trope in old sci-fi films where the brilliant scientist is often portrayed as somewhat inebriated."},
    {id: 2, text: "The episodes featuring 'Interdimensional Cable' showcase various bizarre and hilarious TV shows from across different dimensions. These segments are largely improvised by the voice actors, particularly Justin Roiland (the voice of Rick and Morty), who ad-libs most of the content. This improvisation results in the unpredictable and wildly entertaining nature of these episodes, setting them apart as fan favorites for their raw and spontaneous humor."},
    {id: 3, text: "The Council of Ricks, a group comprising various versions of Rick from different dimensions, is a playful parody of the Council of Reeds from Marvel Comics. This concept in the Marvel universe involves different versions of Reed Richards (Mr. Fantastic) teaming up, sharing knowledge, and sometimes conspiring together. The Council of Ricks serves a similar narrative purpose but is infused with the show's characteristic cynicism and dark humor."},
    {id: 4, text: "Throughout Rick and Morty, the number 137 appears in various contexts, from background details to dialogue. This number is significant in real-world physics, representing the inverse of the fine structure constant, which is fundamental in quantum electrodynamics. The inclusion of such a scientifically relevant number underscores the show's deep engagement with scientific concepts and theories, often weaving them into its plots and humor."},
    {id: 5, text: "The show boasts an impressive list of celebrity guest stars who lend their voices to various characters. These have included actors and public figures like Stephen Colbert, Christina Hendricks, and Keith David, as well as a memorable cameo by Elon Musk, who appeared as his alternate-dimension counterpart, Elon Tusk. These guest appearances add a layer of excitement and prestige, bringing new flavors to the characters they portray."},
    {id: 6, text: "In the 'Interdimensional Cable' episodes, the show introduces viewers to the Plumbus, an ordinary household item in the show's universe, with a bizarre and elaborate manufacturing process. The Plumbus has become a symbol of the show's humor—seemingly mundane but utterly absurd and inexplicable, highlighting the show's creative absurdity and its penchant for poking fun at consumer culture."},
    {id: 7, text: "The haunting and quirky theme song of Rick and Morty draws inspiration from the intros of classic science fiction shows, notably 'Doctor Who' and 'Farscape'. Its creation reflects the show's homage to the sci-fi genre, blending a sense of mystery and adventure with a touch of the familiar to create an immediately recognizable and iconic musical score that sets the tone for the series."},
    {id: 8, text: "The animators of Rick and Morty frequently include subtle easter eggs and callbacks to previous episodes within the show's background animation. These hidden details reward attentive viewers with a sense of continuity and a deeper connection to the show's expansive universe, enhancing the rewatchability as fans seek out these small, often humorous additions."},
    {id: 9, text: "Demonstrating its wide-reaching cultural impact, Rick and Morty characters briefly appeared in the background of an episode of 'My Little Pony: Friendship Is Magic.' This unexpected crossover is a testament to the show's popularity and influence, as well as its ability to bridge different viewer demographics and fandoms in a playful and surprising manner."},
    {id: 10, text: " The term 'schwifty', popularized by Rick in a musical episode where the Earth's fate hangs on a performance, has been officially recognized by being added to the Oxford English Dictionary. The inclusion of 'schwifty' into formal lexicon showcases the cultural resonance and linguistic influence of Rick and Morty, marking its status not just as a television show but as a contributor to contemporary language and culture."},
  ]

  constructor(private router: Router){ }

  ngOnInit(): void {
    let randomId = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let randomFact = this.facts.find(obj=>obj.id == randomId)
    this.chosenFact.next(randomFact)
  }

  back() {
    this.router.navigate(['/'])
  }
}
