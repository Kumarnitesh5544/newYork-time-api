import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyComponent } from './getby.component';

describe('GetbyComponent', () => {
  let component: GetbyComponent;
  let fixture: ComponentFixture<GetbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
