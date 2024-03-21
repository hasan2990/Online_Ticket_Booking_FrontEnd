import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbusesComponent } from './getbuses.component';

describe('GetbusesComponent', () => {
  let component: GetbusesComponent;
  let fixture: ComponentFixture<GetbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetbusesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
