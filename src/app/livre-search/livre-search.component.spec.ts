import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreSearchComponent } from './livre-search.component';

describe('LivreSearchComponent', () => {
  let component: LivreSearchComponent;
  let fixture: ComponentFixture<LivreSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
