import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosCarouselComponent } from './logos-carousel.component';

describe('LogosCarouselComponent', () => {
  let component: LogosCarouselComponent;
  let fixture: ComponentFixture<LogosCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogosCarouselComponent]
    });
    fixture = TestBed.createComponent(LogosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
