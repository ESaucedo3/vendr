import {AppState} from '../AppState.js';
import {snacksService} from '../services/SnacksService.js';

export class VendingController {
  constructor() {
    console.log('Vending Loaded');
    // NOTE Will fire when coins in appstate changes
    this.drawSnackCards();
    AppState.on('money', this.drawSnackCards);
  }

  drawSnackCards() {
    const snackCards = document.getElementById('snack-cards');
    const cash = document.getElementById('cash');

    cash.textContent = AppState.money.toFixed(2);
    snackCards.innerHTML = '';

    const actualSnacks = AppState.snacks;
    actualSnacks.forEach((snack) => {
      snackCards.innerHTML += snack.generateSnackCard;
      const snackCard = document.getElementById(snack.name);
      if (AppState.money < snack.price) {
        snackCard.disabled = true;
      } else {
        snackCard.disabled = false;
      }
    });
  }

  addQuarter() {
    snacksService.addQuarter();
  }

  purchaseSnack(specificSnack) {
    snacksService.purchaseSnack(specificSnack);
  }
}
