import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
activeUsers: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }

  makeInactive(id: number){
    console.log('makeInactive called ' + id);
    this.userService.makeInactive(id);
  }

}
