import { Component, Input, InputSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Games } from '../games';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTerm: InputSignal<string> = Input('');

  call ( name : string)
  {
    
  }


}

