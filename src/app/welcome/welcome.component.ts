import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  login_visible = false
  register_visible = true

  constructor() { }

  ngOnInit(): void {
  }

  show_login() {
    this.login_visible = true;
  }
  show_register() {
    this.register_visible = true;
  }
}
