import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartDetailPage } from './start-detail.page';

describe('StartDetailPage', () => {
  let component: StartDetailPage;
  let fixture: ComponentFixture<StartDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
