import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http:HttpClient) { }

  searchManga(query:string){
    const url = `https://api.jikan.moe/v4/manga?q=${query}`;
    let obsManga = this.http.get(url);
    return obsManga;
  }

  searchDett(query:String){
    const url = `https://api.jikan.moe/v4/manga/${query}`;
    let obsDett = this.http.get(url);
    return obsDett;
  }
}
