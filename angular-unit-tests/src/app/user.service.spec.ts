import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should get one user', () => {
    const service: UserService = TestBed.get(UserService);
    let  backend: HttpTestingController = TestBed.get(HttpTestingController);
    const mockUser = { user: 'John'};

    service.getOne(1).subscribe( user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'Get',
      url: '/users/1'
    }).flush(mockUser);
  });

  /*it('should get all users', () => {
    const service: UserService = TestBed.get(UserService);
    let  backend: HttpTestingController = TestBed.get(HttpTestingController);
    const mockUsers = [{ user: 'John'}, {user: 'John'}];

    service.getAll().subscribe( users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'Get',
      url: '/users'
    }).flush(mockUsers);

  });*/
});
