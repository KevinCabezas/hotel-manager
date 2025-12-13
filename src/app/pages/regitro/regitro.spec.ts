import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regitro } from './regitro';

describe('Regitro', () => {
  let component: Regitro;
  let fixture: ComponentFixture<Regitro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Regitro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Regitro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
