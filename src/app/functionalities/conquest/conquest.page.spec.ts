import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConquestPage } from './conquest.page';

describe('ConquestPage', () => {
  let component: ConquestPage;
  let fixture: ComponentFixture<ConquestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConquestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConquestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
