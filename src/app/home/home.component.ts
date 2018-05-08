import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title: string = 'Angular 5 POC';
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onLoadServer(){
    this.router.navigate(['/server']);
  }

  onLogin(){
    this.loginService.logIn();
  }

  onLogout(){
    this.loginService.logOut();
  }

}
