import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos-carousel',
  templateUrl: './logos-carousel.component.html',
  styleUrls: ['./logos-carousel.component.css']
})
export class LogosCarouselComponent implements OnInit {
  companies = [
    { name: 'A', logo: '../assets/img/brand_logos/logoipsum-290.svg' },
    { name: 'B', logo: '../assets/img/brand_logos/logoipsum-317.svg' },
    { name: 'C', logo: '../assets/img/brand_logos/logoipsum-338.svg' },
    { name: 'D', logo: '../assets/img/brand_logos/logoipsum-342.svg' },
    { name: 'E', logo: '../assets/img/brand_logos/logoipsum-347.svg' },
    { name: 'F', logo: '../assets/img/brand_logos/logoipsum-348.svg' },
  ];

  companiesCount = this.companies.length;

  constructor() { }

  ngOnInit(): void {
    // Optional: Duplicate the companies array once to create a seamless infinite scroll effect (if needed)
    const duplicatedCompanies = [...this.companies, ...this.companies]; 
    this.companies = duplicatedCompanies;
  }
}
