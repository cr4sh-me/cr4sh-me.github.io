import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  title: string = '';
  description: string = '';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;  // Get the id as a number
      const offer = this.offers.find(offer => offer.id === id);
      if (offer) {
        this.title = offer.title;
        this.description = offer.description;
      }
    });
  }
}
