import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroEstudoComponent } from './meu-primeiro-estudo.component';

describe('MeuPrimeiroEstudoComponent', () => {
  let component: MeuPrimeiroEstudoComponent;
  let fixture: ComponentFixture<MeuPrimeiroEstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroEstudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiroEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
