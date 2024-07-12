import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFetchingComponent } from './api-fetching.component';

describe('ApiFetchingComponent', () => {
  let component: ApiFetchingComponent;
  let fixture: ComponentFixture<ApiFetchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiFetchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
