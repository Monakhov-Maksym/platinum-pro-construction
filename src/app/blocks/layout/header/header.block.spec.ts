import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlock } from './header.block';

describe('HeaderBlock', () => {
  let component: HeaderBlock;
  let fixture: ComponentFixture<HeaderBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBlock ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
