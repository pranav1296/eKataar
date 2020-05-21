import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerProfileCreateComponent } from './consumer-profile-create.component';

describe('ConsumerProfileCreateComponent', () => {
  let component: ConsumerProfileCreateComponent;
  let fixture: ComponentFixture<ConsumerProfileCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerProfileCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
