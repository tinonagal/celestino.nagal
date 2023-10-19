import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientv2Component } from './clientv2.component';

describe('Clientv2Component', () => {
  let component: Clientv2Component;
  let fixture: ComponentFixture<Clientv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clientv2Component]
    });
    fixture = TestBed.createComponent(Clientv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
