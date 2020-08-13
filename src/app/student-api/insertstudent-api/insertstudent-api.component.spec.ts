import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertstudentApiComponent } from './insertstudent-api.component';

describe('InsertstudentApiComponent', () => {
  let component: InsertstudentApiComponent;
  let fixture: ComponentFixture<InsertstudentApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertstudentApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertstudentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
