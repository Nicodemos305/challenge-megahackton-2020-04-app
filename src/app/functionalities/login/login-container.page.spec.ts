import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginContainerPage } from './login-container.page';

describe('LoginContainerPage', () => {
  let component: LoginContainerPage;
  let fixture: ComponentFixture<LoginContainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginContainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
