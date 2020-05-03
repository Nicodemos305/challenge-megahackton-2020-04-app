import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsListComponent } from './goals-list.component';

describe('GoalsListComponent', () => {
  let component: GoalsListComponent;
  let fixture: ComponentFixture<GoalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoalsListComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
