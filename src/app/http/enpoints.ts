import {environment} from '../../environments/environment';

export class Enpoints {


  public static readonly TASKS_URL = `${environment.apiUrl}/tasks`;
  public static readonly SUBMISSIONS_URL = `${environment.apiUrl}/submissions`;
  public static readonly USERS_URL = `${environment.apiUrl}/users`;

  public static tasks(): string {
    return this.TASKS_URL;
  }

  public static submissions(): string {
    return this.SUBMISSIONS_URL;
  }

  public static users(): string {
    return this.USERS_URL;
  }

}
