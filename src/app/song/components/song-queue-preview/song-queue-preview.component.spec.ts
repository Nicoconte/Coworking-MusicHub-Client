import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongQueuePreviewComponent } from './song-queue-preview.component';

describe('SongQueuePreviewComponent', () => {
  let component: SongQueuePreviewComponent;
  let fixture: ComponentFixture<SongQueuePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongQueuePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongQueuePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
