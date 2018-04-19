import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
inActiveUsers: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.inActiveUsers = this.userService.inActiveUsers;
  }

  makeActive(id: number){
    this.userService.makeActive(id);
  }
}
