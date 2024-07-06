import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinfoComponent } from './productsinfo.component';

describe('ProductsinfoComponent', () => {
  let component: ProductsinfoComponent;
  let fixture: ComponentFixture<ProductsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
