import { Inject, Injectable, signal } from '@angular/core';
import { SearchResult, rawgGameDetails, GameDetails } from './models/interface.interface';

@Injectable({
  providedIn: 'root',
})
export class Games {
  public SearchRes = signal<SearchResult | null>(null);
  private key = any;
  private searchUrl = 'https://api.rawg.io/api/games?&key=' + this.key + '&page_size=10&search_exact=true&search=';
  private detailsUrl = 'https://www.omdbapi.com/?apikey='+this.key+'&r=json&t=';

  public http = Inject('HttpClient');





  public call(name: string, page: number=1) {
    const url = this.searchUrl + name + '&page=' + page;
    this.http.get<SearchResult>(url).pipe(take(1)).subscribe
    ({
      next: (data) => {
        this.SearchRes.set(data);
      }
    });
  }
}
