import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBareComponent } from './nav-bare.component';

describe('NavBareComponent', () => {
  let component: NavBareComponent;
  let fixture: ComponentFixture<NavBareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
