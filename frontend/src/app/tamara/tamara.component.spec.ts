import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamaraComponent } from './tamara.component';

describe('TamaraComponent', () => {
  let component: TamaraComponent;
  let fixture: ComponentFixture<TamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
