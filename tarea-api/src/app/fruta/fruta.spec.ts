import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruta } from './fruta';

describe('Fruta', () => {
  let component: Fruta;
  let fixture: ComponentFixture<Fruta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
