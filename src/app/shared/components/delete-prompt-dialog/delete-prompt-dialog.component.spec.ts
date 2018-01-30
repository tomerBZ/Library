import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePromptDialogComponent } from './delete-prompt-dialog.component';

describe('DeletePromptDialogComponent', () => {
  let component: DeletePromptDialogComponent;
  let fixture: ComponentFixture<DeletePromptDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePromptDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePromptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
