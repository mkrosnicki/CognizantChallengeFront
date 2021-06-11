import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../model/task.model';
import {Observable} from 'rxjs';
import {Enpoints} from './enpoints';
import {SubmissionResult} from './submission-result.model';

@Injectable({providedIn: 'root'})
export class SubmissionHttpService {


  constructor(private httpClient: HttpClient) {
  }

  public postSubmission(username: string, taskId: string, solution: string): Observable<SubmissionResult> {
    return this.httpClient.post<SubmissionResult>(Enpoints.submissions(), {username, taskId, solution});
  }

}
