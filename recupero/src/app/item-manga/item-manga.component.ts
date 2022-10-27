import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-item-manga',
  templateUrl: './item-manga.component.html',
  styleUrls: ['./item-manga.component.css']
})
export class ItemMangaComponent implements OnInit {
  routeObs: Observable<ParamMap> | undefined;
  mangaServiceObs: Observable<Object> | undefined;
  items: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServizioService
  ) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let itemId = params.get('id'); //Ottengo l'id dai parametri
    console.log(itemId); //Stampo su console
    this.mangaServiceObs = this.service.searchDett(itemId!);
    this.mangaServiceObs.subscribe(
      (data) => ((this.items = data), console.log(data))
    );
  };
}