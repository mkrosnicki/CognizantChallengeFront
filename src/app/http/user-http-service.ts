import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../model/user.model';
import {Observable} from 'rxjs';
import {Enpoints} from './enpoints';

@Injectable({providedIn: 'root'})
export class UserHttpService {


  constructor(private httpClient: HttpClient) {
  }

  public fetchUsers(page: number, size: number): Observable<User[]> {
    return this.httpClient.get<User[]>(Enpoints.users(), {
      params: {
        size: size.toString(),
        page: page.toString(),
      }
    });
  }

}
