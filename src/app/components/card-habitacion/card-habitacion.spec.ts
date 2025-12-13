import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHabitacion } from './card-habitacion';

describe('CardHabitacion', () => {
  let component: CardHabitacion;
  let fixture: ComponentFixture<CardHabitacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHabitacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHabitacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
