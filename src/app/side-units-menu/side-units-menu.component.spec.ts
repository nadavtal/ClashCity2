import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideUnitsMenuComponent } from './side-units-menu.component';

describe('SideUnitsMenuComponent', () => {
  let component: SideUnitsMenuComponent;
  let fixture: ComponentFixture<SideUnitsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideUnitsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideUnitsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
