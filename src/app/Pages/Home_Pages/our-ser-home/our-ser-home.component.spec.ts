import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSerHomeComponent } from './our-ser-home.component';

describe('OurSerHomeComponent', () => {
  let component: OurSerHomeComponent;
  let fixture: ComponentFixture<OurSerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
