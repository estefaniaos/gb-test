import { Component } from '@angular/core';
import { Routes, Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gb-test';
  constructor(public router: Router){}
}
