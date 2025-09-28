import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantoresPesquisaComponent } from './cantores-pesquisa.component';

describe('CantoresPesquisaComponent', () => {
  let component: CantoresPesquisaComponent;
  let fixture: ComponentFixture<CantoresPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantoresPesquisaComponent]
    });
    fixture = TestBed.createComponent(CantoresPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
