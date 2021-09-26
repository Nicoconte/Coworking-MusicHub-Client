import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSongModalComponent } from './send-song-modal.component';

describe('SendSongModalComponent', () => {
  let component: SendSongModalComponent;
  let fixture: ComponentFixture<SendSongModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendSongModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSongModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
