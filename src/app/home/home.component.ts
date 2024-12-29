import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  offers = [
    { id: 1, title: 'Chemia', description: 'Kompleksowe wyposażenie obiektów w chemię' },
    { id: 2, title: 'Czyszczenie na wysokości', description: 'Zapewniamy bezpieczny i skuteczny sposób czyszczenia z poziomu gruntu' },
    { id: 3, title: 'Dezynfekcja', description: 'Profesjonalne systemy dezynfekcji dla domów, restauracji, hoteli oraz przemysłu' },
    { id: 4, title: 'Maszyny', description: 'Posiadamy ogromne zaplecze maszyn czyszczących' },
    { id: 5, title: 'Serwis', description: 'Dystrybucja i zaplecze serwisowe maszyn czyszczących' },
    { id: 6, title: 'Usługi', description: 'Usługi związane z kompleksowym utrzymaniem czystości' },
    { id: 7, title: 'Uzdatnianie wody', description: 'Profesjonalne systemy uzdatniania wody dla domów, restauracji, hoteli oraz przemysłu' },
    { id: 8, title: 'Wyposażenie gastronomii', description: 'Kompleksowe wyposażenie obiektów w sprzęt gastronomiczny oraz jego serwis' },
    { id: 9, title: 'Wypożyczalnia', description: 'Profesjonalne maszyny na wyciągnięcie ręki' }
  ];

  constructor(private router: Router) {}

  // Optional: Use this method if you're using the (click) handler instead of routerLink
  onOfferSelect(offer: any) {
    this.router.navigate(['/menu', offer.id]); // Navigate to MenupageComponent with the offer's id
  }
}
