import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtestudentApiComponent } from './updtestudent-api.component';

describe('UpdtestudentApiComponent', () => {
  let component: UpdtestudentApiComponent;
  let fixture: ComponentFixture<UpdtestudentApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdtestudentApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdtestudentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
