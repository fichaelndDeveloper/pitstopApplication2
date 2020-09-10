import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageboardComponent } from './engageboard.component';

describe('EngageboardComponent', () => {
  let component: EngageboardComponent;
  let fixture: ComponentFixture<EngageboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngageboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
