import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let userService: UserService;
  let spy: jasmine.Spy;
  let mockUser;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,  HttpClientTestingModule ],
      declarations: [ UserCardComponent ],
      providers: [UserService]
    })
    .compileComponents();


    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    spy = spyOn(userService, 'getOne').and.returnValue(Observable.of(mockUser))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should get user', () => {
    component.someMethod();
    expect(component.user).toEqual(mockUser);
  });
});
