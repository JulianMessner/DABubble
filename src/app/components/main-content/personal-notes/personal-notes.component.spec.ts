import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalNotesComponent } from './personal-notes.component';

describe('PersonalNotesComponent', () => {
  let component: PersonalNotesComponent;
  let fixture: ComponentFixture<PersonalNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
