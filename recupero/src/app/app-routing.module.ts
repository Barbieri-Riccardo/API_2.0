import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemMangaComponent } from './item-manga/item-manga.component';
import { SearchMangaComponent } from './search-manga/search-manga.component';

const routes: Routes = [
  {path:"search-manga", component: SearchMangaComponent},
  {path:"item-manga/:id", component: ItemMangaComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
