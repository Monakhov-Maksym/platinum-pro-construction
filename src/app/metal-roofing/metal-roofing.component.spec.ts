import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalRoofingComponent } from './metal-roofing.component';

describe('MetalRoofingComponent', () => {
  let component: MetalRoofingComponent;
  let fixture: ComponentFixture<MetalRoofingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalRoofingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalRoofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
