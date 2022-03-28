import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientModelComponent } from './add-client-model.component';

describe('AddClientModelComponent', () => {
  let component: AddClientModelComponent;
  let fixture: ComponentFixture<AddClientModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
