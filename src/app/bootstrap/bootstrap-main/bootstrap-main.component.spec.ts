import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMainComponent } from './bootstrap-main.component';

describe('BootstrapMainComponent', () => {
  let component: BootstrapMainComponent;
  let fixture: ComponentFixture<BootstrapMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
