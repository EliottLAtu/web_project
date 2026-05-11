import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Games } from '../games';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTerm = '';

  constructor(private readonly games: Games) {}

  call() {
    const name = this.searchTerm.trim();
    if (!name) {
      return;
    }
    this.searchTerm='';

    this.games.search_gene(name);
  }
}

