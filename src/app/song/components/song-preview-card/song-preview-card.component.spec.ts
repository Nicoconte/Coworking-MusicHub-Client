import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPreviewCardComponent } from './song-preview-card.component';

describe('SongPreviewCardComponent', () => {
  let component: SongPreviewCardComponent;
  let fixture: ComponentFixture<SongPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
