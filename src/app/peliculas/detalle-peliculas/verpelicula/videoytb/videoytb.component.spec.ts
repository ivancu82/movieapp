import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoytbComponent } from './videoytb.component';

describe('VideoytbComponent', () => {
  let component: VideoytbComponent;
  let fixture: ComponentFixture<VideoytbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoytbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoytbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
