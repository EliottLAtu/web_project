import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Result } from '../result/result';

@Component({
  selector: 'app-home',
  imports: [Search, Result],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
