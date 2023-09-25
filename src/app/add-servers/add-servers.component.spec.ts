import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServersComponent } from './add-servers.component';

describe('AddServersComponent', () => {
  let component: AddServersComponent;
  let fixture: ComponentFixture<AddServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
