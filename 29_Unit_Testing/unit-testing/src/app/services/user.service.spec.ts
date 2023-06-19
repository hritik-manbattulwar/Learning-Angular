import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from './user.service';

describe('User Service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let userService: UserService;
  let usersList: [] = [];
  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    userService = TestBed.inject(UserService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('fetchAllEmployees()', () => {
    it('should return expected users when fetchAllEmployees is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(usersList));
      userService.fetchAllEmployees().subscribe({
        next: (users) => {
          expect(users).toEqual(usersList);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
