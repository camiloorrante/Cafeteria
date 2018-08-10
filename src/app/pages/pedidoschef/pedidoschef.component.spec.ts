import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoschefComponent } from './pedidoschef.component';

describe('PedidoschefComponent', () => {
  let component: PedidoschefComponent;
  let fixture: ComponentFixture<PedidoschefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoschefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoschefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
