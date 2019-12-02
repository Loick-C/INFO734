import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconnecterPage } from './seconnecter.page';

describe('SeconnecterPage', () => {
  let component: SeconnecterPage;
  let fixture: ComponentFixture<SeconnecterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconnecterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconnecterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
