import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoreProfileCreateComponent } from './vendore-profile-create.component';

describe('VendoreProfileCreateComponent', () => {
  let component: VendoreProfileCreateComponent;
  let fixture: ComponentFixture<VendoreProfileCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoreProfileCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoreProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
