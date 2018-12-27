import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCustomerComponent } from './combo-customer.component';

describe('ComboCustomerComponent', () => {
  let component: ComboCustomerComponent;
  let fixture: ComponentFixture<ComboCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
