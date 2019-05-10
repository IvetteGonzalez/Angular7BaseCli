import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogNewItemComponent } from './app-dialog-new-item.component';

describe('AppDialogNewItemComponent', () => {
  let component: AppDialogNewItemComponent;
  let fixture: ComponentFixture<AppDialogNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDialogNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
