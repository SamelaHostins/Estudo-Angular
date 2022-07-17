import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoEstudoComponent } from './projeto-estudo.component';

describe('ProjetoEstudoComponent', () => {
  let component: ProjetoEstudoComponent;
  let fixture: ComponentFixture<ProjetoEstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoEstudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
