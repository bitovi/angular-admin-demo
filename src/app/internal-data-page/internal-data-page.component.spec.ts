import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalDataPageComponent } from './internal-data-page.component';

describe('InternalDataPageComponent', () => {
  let component: InternalDataPageComponent;
  let fixture: ComponentFixture<InternalDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalDataPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
