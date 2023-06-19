import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { By } from '@angular/platform-browser';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let debugElement: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
    });
    fixture = TestBed.createComponent(ProductItemComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    expect(component.title).toBe(' Welcome To Product Item Page');
  });

  it('should render a title on html', () => {
    const fixture = TestBed.createComponent(ProductItemComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(
      ' Welcome To Product Item Page'
    );
  });
  it('should render a image on html', () => {
    const fixture = TestBed.createComponent(ProductItemComponent);
    fixture.detectChanges();
    const imageElement: any = fixture.debugElement.query(By.css('.prod-img'));
    expect(component.product.image).toBe(imageElement.nativeElement.src);
  });

  it('should increase the prod-qty on click', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    const qtyElement: any = fixture.debugElement.query(By.css('.prod-qty'));
    const plusSymbol: any = fixture.debugElement.query(
      By.css('.fa-plus-circle')
    );
    fixture.detectChanges();
    plusSymbol.triggerEventHandler('click', {});
    expect(component.product.qty).toBe(
      Number(qtyElement.nativeElement.textContent)
    );
  });
  it('should decrease the prod-qty on click', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    let qtyElement = fixture.debugElement.query(By.css('.prod-qty'));
    let minusSymbol = fixture.debugElement.query(By.css('.fa-minus-circle'));
    minusSymbol.triggerEventHandler('click', {});
    fixture.autoDetectChanges();
    expect(component.product.qty).toBe(
      Number(qtyElement.nativeElement.textContent)
    );
    // console.log(qtyElement.nativeElement.textContent);
  });
});
