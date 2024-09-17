import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMain } from './main.component';

describe('MainComponent', () => {
  let component: AppMain;
  let fixture: ComponentFixture<AppMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
