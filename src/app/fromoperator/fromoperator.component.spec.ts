import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromoperatorComponent } from './fromoperator.component';

describe('FromoperatorComponent', () => {
  let component: FromoperatorComponent;
  let fixture: ComponentFixture<FromoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromoperatorComponent]
    });
    fixture = TestBed.createComponent(FromoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
