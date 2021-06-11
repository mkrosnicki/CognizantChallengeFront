import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../model/task.model';
import {Observable} from 'rxjs';
import {Enpoints} from './enpoints';

@Injectable({providedIn: 'root'})
export class TaskHttpService {


  constructor(private httpClient: HttpClient) {
  }

  public fetchTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(Enpoints.tasks());
  }

}
