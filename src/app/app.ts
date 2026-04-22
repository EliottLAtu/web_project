import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from './search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web_project');
  //  api : steam et rawg 
  
  }
