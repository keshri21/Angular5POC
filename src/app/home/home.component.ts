import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title: string = 'Angular 5 POC';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(){
    this.router.navigate(['/server']);
  }

}