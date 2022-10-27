import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMangaComponent } from './item-manga.component';

describe('ItemMangaComponent', () => {
  let component: ItemMangaComponent;
  let fixture: ComponentFixture<ItemMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
