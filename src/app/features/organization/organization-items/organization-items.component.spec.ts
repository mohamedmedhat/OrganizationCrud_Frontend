import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationItemsComponent } from './organization-items.component';

describe('OrganizationItemsComponent', () => {
  let component: OrganizationItemsComponent;
  let fixture: ComponentFixture<OrganizationItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
