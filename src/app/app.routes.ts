import { Routes } from '@angular/router';
import { Favs } from './favs/favs';
import { Home } from './home/home';

export const routes: Routes = [{path :'', component : Home}, {path :'/favs', component : Favs}];
