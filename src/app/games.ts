import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { SearchResult, rawgGameDetails, steam_name_search, steam_info, nb_joueurs_response } from './models/interface.interface';
import { environment } from '../../.env';

@Injectable({
  providedIn: 'root',
})
export class Games {
  public SearchRes = signal<SearchResult | null>(null);
  private steamid = 'temp';
  public gameDetails = signal<steam_info | null>(null);
  public nb_joueurs = signal<number>(0);
  
  private readonly searchUrl = `https://api.rawg.io/api/games?&key=${environment.rawg}&page_size=10&search_exact=true&search=`;


  private readonly http = inject(HttpClient);

  public search_gene(name: string, page: number = 1) {
    const url = `${this.searchUrl}${encodeURIComponent(name)}&page=${page}`;

    this.http.get<SearchResult>(url, {mode: 'cors'}).pipe(take(1)).subscribe({
      next: (data) => this.SearchRes.set(data),
      error: (err) => console.error('Rawg search failed:', err)
    });
  }

  public search_details(name: string) {
    const url1 = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(name)}&l=english&cc=US`;
    this.http.get<steam_name_search>(url1, {mode: 'cors'}).pipe(take(1)).subscribe({
      next: (data) => this.steamid =data.items[0].id.toString(),
      error: (err) => console.error('steam name search failed:', err)
    });
    const url2 = 'https://store.steampowered.com/api/appdetails?appids=' + this.steamid + '&l=english';
    this.http.get<steam_info>(url2, {mode: 'cors'}).pipe(take(1)).subscribe({
      next: (data) => this.gameDetails.set(data),
      error: (err) => console.error('steam details search failed:', err)
    });
    const url3 = 'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=' + this.steamid;
    this.http.get<nb_joueurs_response>(url3, {mode: 'cors'}).pipe(take(1)).subscribe({
      next: (data) => this.nb_joueurs.set(data.response.player_count),
      error: (err) => console.error('steam player number failed:', err)
    });
    

  }


}
