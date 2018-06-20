import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRcommendationsComponent } from './video-rcommendations.component';

describe('VideoRcommendationsComponent', () => {
  let component: VideoRcommendationsComponent;
  let fixture: ComponentFixture<VideoRcommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoRcommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRcommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
