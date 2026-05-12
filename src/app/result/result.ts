import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Games } from '../games';
import { rawgGameDetails } from '../models/interface.interface';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  private readonly games = inject(Games);
  public currentPage = signal(1);
  public selectedGame = signal<rawgGameDetails | null>(null);

  private readonly results = computed(() => this.games.SearchRes()?.results || []);
  public readonly steamDetails = computed(() => this.games.gameDetails());
  public readonly playerCount = computed(() => this.games.nb_joueurs());
  public readonly totalPages = computed(() => Math.max(1, Math.ceil(this.results().length / 10)));
  public readonly noGames = computed(() => this.games.SearchRes() !== null && this.results().length === 0);
  public readonly paginated = computed(() => {
    const start = (this.currentPage() - 1) * 10;
    return this.results().slice(start, start + 10);
  });

  constructor() {
    effect(() => {
      const count = this.results().length;
      if (count > 0) {
        this.currentPage.set(1);
      }
      if (count === 0) {
        this.selectedGame.set(null);
      }
    });
  }

  next() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  prec() {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  selectGame(game: rawgGameDetails) {
    this.selectedGame.set(game);
    this.games.search_details(game.name);
  }

  trackByGameId(_index: number, game: rawgGameDetails) {
    return game.id;
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}
  