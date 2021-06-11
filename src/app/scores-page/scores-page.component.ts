import { Component, OnInit } from '@angular/core';
import {UserHttpService} from '../http/user-http-service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.css']
})
export class ScoresPageComponent implements OnInit {
  users: User[] = [];

  constructor(private userHttpService: UserHttpService) { }

  ngOnInit(): void {
    this.userHttpService.fetchUsers(0, 3).subscribe((value: User[]) => this.users = value);
  }

}
