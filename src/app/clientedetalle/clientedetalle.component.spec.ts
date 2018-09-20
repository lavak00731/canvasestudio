import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientedetalleComponent } from './clientedetalle.component';

describe('ClientedetalleComponent', () => {
  let component: ClientedetalleComponent;
  let fixture: ComponentFixture<ClientedetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientedetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
