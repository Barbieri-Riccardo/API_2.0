import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-search-manga',
  templateUrl: './search-manga.component.html',
  styleUrls: ['./search-manga.component.css']
})
export class SearchMangaComponent implements OnInit {
  query: string | undefined;
  obsManga: Observable<Object> | undefined;
  results: any;
  constructor(public manga: ServizioService) { }

  ngOnInit(): void {

  }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsManga = this.manga.searchManga(this.query);
    this.obsManga.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
      localStorage.setItem('dataSource', JSON.stringify(this.results));
    });
  }
}


