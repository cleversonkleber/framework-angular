import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantorCadastroComponent } from './cantor-cadastro.component';

describe('CantorCadastroComponent', () => {
  let component: CantorCadastroComponent;
  let fixture: ComponentFixture<CantorCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantorCadastroComponent]
    });
    fixture = TestBed.createComponent(CantorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
