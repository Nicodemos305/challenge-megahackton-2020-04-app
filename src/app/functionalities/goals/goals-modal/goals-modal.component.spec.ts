import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsModalComponent } from './goals-modal.component';

describe('GoalsModalComponent', () => {
  let component: GoalsModalComponent;
  let fixture: ComponentFixture<GoalsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoalsModalComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
