import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookComponent } from './get-book.component';

describe('GetBookComponent', () => {
  let component: GetBookComponent;
  let fixture: ComponentFixture<GetBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetBookComponent]
    });
    fixture = TestBed.createComponent(GetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
