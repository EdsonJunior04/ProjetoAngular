import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTesteComponent } from './item-teste.component';

describe('ItemTesteComponent', () => {
  let component: ItemTesteComponent;
  let fixture: ComponentFixture<ItemTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
