import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ItemsComponent,
        ShoppingcartComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Angular Tutorial'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Antular Tutorial');
  }));
});
