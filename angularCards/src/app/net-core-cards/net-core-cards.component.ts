import { Component, OnInit } from '@angular/core';
import { CardsData } from '../dataservice';
import { MatChipSelectionChange } from '@angular/material';

@Component({
  selector: 'app-net-core-cards',
  templateUrl: './net-core-cards.component.html',
  styleUrls: ['./net-core-cards.component.css']
})
export class NetCoreCardsComponent implements OnInit {
  arrCards: CardsData[];
  selectedCard: CardsData;
  constructor() { }

  ngOnInit() {
    this.arrCards = CardsData.AllCards();
    this.selectedCard = this.arrCards[0];
  }
  selectMe(card: CardsData){

     this.selectedCard = card;
  }
}
