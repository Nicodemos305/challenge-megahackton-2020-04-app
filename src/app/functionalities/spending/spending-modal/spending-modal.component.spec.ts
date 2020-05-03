import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpendingModalComponent } from './spending-modal.component';

describe('SpendingModalComponent', () => {
  let component: SpendingModalComponent;
  let fixture: ComponentFixture<SpendingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
