import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpendingListComponent } from './spending-list.component';

describe('SpendingListComponent', () => {
  let component: SpendingListComponent;
  let fixture: ComponentFixture<SpendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
