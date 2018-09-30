import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Livre } from '../livre';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livre-search',
  templateUrl: './livre-search.component.html',
  styleUrls: ['./livre-search.component.css']
})
export class LivreSearchComponent implements OnInit {
  livres$: Observable<Livre[]>;
  private searchTerms = new Subject<string>();

  constructor(private livreService: LivreService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.livres$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.livreService.searchLivres(term)),
    );
  }
}