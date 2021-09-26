import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeYoutubeComponent } from './iframe-youtube.component';

describe('IframeYoutubeComponent', () => {
  let component: IframeYoutubeComponent;
  let fixture: ComponentFixture<IframeYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
