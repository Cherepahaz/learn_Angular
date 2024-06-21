import { Component, OnInit } from '@angular/core';
import { MockApiCardService } from '../../Services/mock-api-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent implements OnInit {

  cards: any[] = [];
  currPage: number = 1;
  itemsPage: number = 6;
  totalCards: number = 0;
  isLoad: boolean = false;

  constructor(
    private apiCard: MockApiCardService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.apiCard.getCards()
      .subscribe(data => {
        this.cards = data;
        this.totalCards = data.length;
      }, error => {
        this.cards = [];
      })
  }

  get paginatedCards() {
    const start = (this.currPage - 1) * this.itemsPage;
    const end = start + this.itemsPage;
    return this.cards.slice(start, end);
  }


  nextPage(): void {
    if (this.currPage * this.itemsPage < this.totalCards) {
      this.currPage++;
    }
  }

  previousPage(): void {
    if (this.currPage > 1) {
      this.currPage--;
    }
  }


  goDetails(i: number): void {
    this.isLoad = true;
    setTimeout(
      () => {
        this.isLoad = false;
        this._router.navigate([`/details/${i}`]);
      }, 5000
    )
  }
}
