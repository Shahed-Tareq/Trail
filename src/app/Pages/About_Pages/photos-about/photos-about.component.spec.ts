import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAboutComponent } from './photos-about.component';

describe('PhotosAboutComponent', () => {
  let component: PhotosAboutComponent;
  let fixture: ComponentFixture<PhotosAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
