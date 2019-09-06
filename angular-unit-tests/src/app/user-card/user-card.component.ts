import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  public user;

  constructor(private userService: UserService) { }

  someMethod() {
    this.userService.getOne(1).subscribe(user => this.user = user);
  }

}
