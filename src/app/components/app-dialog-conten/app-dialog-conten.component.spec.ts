import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogContenComponent } from './app-dialog-conten.component';

describe('AppDialogContenComponent', () => {
  let component: AppDialogContenComponent;
  let fixture: ComponentFixture<AppDialogContenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDialogContenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
