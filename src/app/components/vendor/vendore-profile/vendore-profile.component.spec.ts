import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoreProfileComponent } from './vendore-profile.component';

describe('VendoreProfileComponent', () => {
  let component: VendoreProfileComponent;
  let fixture: ComponentFixture<VendoreProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoreProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoreProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
