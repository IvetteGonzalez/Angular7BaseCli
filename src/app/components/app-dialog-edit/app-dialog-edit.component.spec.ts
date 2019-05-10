import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogEditComponent } from './app-dialog-edit.component';

describe('AppDialogEditComponent', () => {
  let component: AppDialogEditComponent;
  let fixture: ComponentFixture<AppDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
